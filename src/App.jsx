import { useRef, useState } from 'react'
import {
  Flame,
  Pause,
  Play,
  Radio,
  Skull,
  Volume2,
  Zap,
} from 'lucide-react'
import './App.css'

const cover = (url) => url.replace('100x100bb', '600x600bb')

const albumArt = {
  vol1: cover(
    'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ad/13/32/ad13320b-9973-20d1-46d7-ed2bc9082225/00602577013348.rgb.jpg/100x100bb.jpg',
  ),
  vol2: cover(
    'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/f9/fe/6b/f9fe6b16-23cb-be1d-93b1-4b5291605299/19UM1IM08770.rgb.jpg/100x100bb.jpg',
  ),
  toxic: cover(
    'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/f3/ef/3b/f3ef3bcf-1e2e-fb30-2f25-c17b2cc80805/20UMGIM61475.rgb.jpg/100x100bb.jpg',
  ),
  vol3: cover(
    'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/6b/85/bc/6b85bcae-314a-152d-c4cc-9a0a8753e290/21UM1IM25271.rgb.jpg/100x100bb.jpg',
  ),
  mba: cover(
    'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/65/e5/17/65e51712-59db-4c9f-e7ad-7790df122415/23UMGIM53329.rgb.jpg/100x100bb.jpg',
  ),
}

const tracks = [
  {
    id: 'aw',
    title: 'Aw Shit',
    year: '2018',
    album: 'Vol. 1: Hell or High Water',
    mood: 'первые удары',
    art: albumArt.vol1,
    preview:
      'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/26/0d/ce/260dce0e-f1b4-e852-9014-4046b43da134/mzaf_14444797078574110780.plus.aac.p.m4a',
    story:
      'Один из треков, где City Morgue сразу закрепили формулу: коротко, грязно, с панковским припевом и ощущением драки в подвале.',
  },
  {
    id: 'shinners',
    title: 'SHINNERS13',
    year: '2018',
    album: 'Vol. 1: Hell or High Water',
    mood: 'вирусный прорыв',
    art: albumArt.vol1,
    preview:
      'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/96/e7/6e/96e76e95-ceaf-fe8f-e81c-385d5286b156/mzaf_6314727863491181046.plus.aac.p.m4a',
    story:
      'Клип и трек стали ранним знаком их эстетики: шок-рэп, скейт-панк, металлический шум и грубая уличная энергия.',
  },
  {
    id: '33rd',
    title: '33rd Blakk Glass',
    year: '2018',
    album: 'Vol. 1: Hell or High Water',
    mood: 'подпольный гимн',
    art: albumArt.vol1,
    preview:
      'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/83/5b/60/835b60a2-9508-0af5-0389-15bb0148121b/mzaf_3142207743572130848.plus.aac.p.m4a',
    story:
      'Трек собрал в одном месте фирменные роли дуэта: ZillaKami давит хрипом и припевом, SosMula добавляет хаотичную уличную браваду.',
  },
  {
    id: 'sk8',
    title: 'Sk8 Head',
    year: '2018',
    album: 'Vol. 1: Hell or High Water',
    mood: 'скейт и трэш',
    art: albumArt.vol1,
    preview:
      'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/dc/32/21/dc3221c6-ca4c-a610-0ed6-9ccfaa22b83a/mzaf_12224691315739125979.plus.aac.p.m4a',
    story:
      'Название прямо связано с визуальной ДНК группы: скейтборды, граффити, клиповая грязь и быстрый припев вместо глянца.',
  },
  {
    id: 'draino',
    title: 'DRAINO',
    year: '2019',
    album: 'Vol. 2: As Good As Dead',
    mood: 'мрачная мелодика',
    art: albumArt.vol2,
    preview:
      'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/8f/3b/60/8f3b605f-ab87-260f-b890-6a6e713a09bb/mzaf_17647657926879874789.plus.aac.p.m4a',
    story:
      'Фит с Denzel Curry расширил масштаб: меньше чистого хаоса, больше кинематографичной депрессии и тяжёлого припева.',
  },
  {
    id: 'hurtworld',
    title: "HURTWORLD '99",
    year: '2020',
    album: 'Toxic Boogaloo',
    mood: 'эпоха карантина',
    art: albumArt.toxic,
    preview:
      'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/17/10/33/1710333b-e7b5-1cb5-5212-12b73b04254b/mzaf_7226518479524798417.plus.aac.p.m4a',
    story:
      'Лид-сингл mixtape-эры: максимально сухой, агрессивный звук, будто City Morgue нарочно убрали всё лишнее.',
  },
  {
    id: 'name',
    title: "WHAT'S MY NAME",
    year: '2021',
    album: 'Bottom of the Barrel',
    mood: 'возвращение давления',
    art: albumArt.vol3,
    preview:
      'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e9/dd/17/e9dd17e5-98a8-ce16-cb37-bff4811b62f8/mzaf_14292834368652311971.plus.aac.p.m4a',
    story:
      'Сингл к третьему альбому звучит как проверка имени: группа напоминает, что их сила в прямом, почти боевом припеве.',
  },
  {
    id: 'skull',
    title: 'Skull & Bones 322',
    year: '2023',
    album: 'My Bloody America',
    mood: 'финальная глава',
    art: albumArt.mba,
    preview:
      'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0d/6e/30/0d6e303c-02b0-d7f7-6afc-45759c9ada58/mzaf_11653633662825384904.plus.aac.p.m4a',
    story:
      'Первый большой сигнал финального альбома: конспирологический, злой, с ощущением последней серии в их вселенной.',
  },
  {
    id: 'waco',
    title: 'HAHA WACO',
    year: '2023',
    album: 'My Bloody America',
    mood: 'нервный финал',
    art: albumArt.mba,
    preview:
      'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/69/ef/99/69ef995d-402c-1dec-856a-57169528cfb1/mzaf_18299561626871295159.plus.aac.p.m4a',
    story:
      'Один из самых цепких моментов позднего City Morgue: язвительная подача, припев-скандирование и финальная злость дуэта.',
  },
]

const timeline = [
  {
    year: '2016-2017',
    title: 'Сборка команды',
    text: 'ZillaKami уже был заметен в нью-йоркском андеграунде и работал вокруг ранней сцены SoundCloud-рэпа. После встречи с SosMula и продюсером Thraxx появилась химия: крик, 808, металлические сэмплы, уличная злость.',
  },
  {
    year: '2018',
    title: 'Первый взрыв',
    text: 'Синглы вроде SHINNERS13, 33rd Blakk Glass и Sk8 Head собрали культ вокруг клипов, а дебютный альбом Hell or High Water оформил их как дуэт, который смешивает рэп-концерт и хардкор-пит.',
  },
  {
    year: '2019',
    title: 'Выход из подполья',
    text: 'Vol. 2: As Good As Dead сделал звук крупнее. У группы появились большие туры, фиты, чарты и ощущение, что trap metal может стать не нишей, а полноценной сценой.',
  },
  {
    year: '2020-2021',
    title: 'Жёсткая середина',
    text: 'Toxic Boogaloo и Bottom of the Barrel звучали ещё суше и злее: меньше романтики, больше слома, опасности и прямолинейной энергии.',
  },
  {
    year: '2022-2024',
    title: 'Последний круг',
    text: 'ZillaKami и SosMula публично говорили, что тур и следующий альбом могут стать последними для City Morgue. My Bloody America вышел как финальный студийный альбом, после чего артисты всё сильнее двигались по сольным траекториям.',
  },
]

const albums = [
  {
    title: 'City Morgue Vol. 1: Hell or High Water',
    year: '2018',
    art: albumArt.vol1,
    note: 'Дебют: грязная, резкая формула дуэта. Обложка похожа на опасный панк-флаер, а музыка звучит как манифест новой trap-metal сцены.',
  },
  {
    title: 'City Morgue Vol. 2: As Good As Dead',
    year: '2019',
    art: albumArt.vol2,
    note: 'Более крупный и хитовый релиз. Тут появились более явные припевы, мрачная мелодика и треки, которые лучше работали на больших площадках.',
  },
  {
    title: 'Toxic Boogaloo',
    year: '2020',
    art: albumArt.toxic,
    note: 'Короткий mixtape без лишней полировки. Обложка с полицейским mugshot-настроением идеально держит токсичную, резкую подачу.',
  },
  {
    title: 'Bottom of the Barrel',
    year: '2021',
    art: albumArt.vol3,
    note: 'Третий том звучит как спуск ниже: тяжёлые биты, хоррор-образы, усталость и агрессия, которые уже ближе к финальной фазе.',
  },
  {
    title: 'My Bloody America',
    year: '2023',
    art: albumArt.mba,
    note: 'Финальный альбом. Название и обложка делают Америку кровавой декорацией, где дуэт прощается со своей общей мифологией.',
  },
]

const members = [
  {
    name: 'ZillaKami',
    role: 'хрип, припевы, панк-нерв',
    image: albumArt.toxic,
    text: 'Junius Rogers принёс в City Morgue тяжёлую панк- и ню-металлическую сторону: кричащие припевы, темы тревоги, насилия, саморазрушения и отчуждения.',
  },
  {
    name: 'SosMula',
    role: 'адлибы, уличная бравада, хаос',
    image: albumArt.vol2,
    text: 'Vinicius Sosa добавил более криминальную, карнавально-злую энергию: быстрые выкрики, грязный юмор, трэп-браваду и контраст к хриплому Zilla.',
  },
  {
    name: 'Thraxx',
    role: 'ранний архитектор звука',
    image: albumArt.vol1,
    text: 'Продюсер Thraxx помог собрать ранний саунд: индустриальный шум, металлические гитары, 808-бас и ощущение, что трек сейчас развалит комнату.',
  },
]

const sources = [
  ['Apple Music: дискография, годы, превью', 'https://music.apple.com/us/artist/city-morgue/1361386830'],
  ['Официальный сайт City Morgue', 'https://www.citymorgueofficial.com/'],
  ['Thrasher: интервью о панк-влиянии', 'https://www.thrashermagazine.com/articles/music-interviews/city-morgue-interview/'],
  ['Revolver: материалы о группе и турах', 'https://www.revolvermag.com/search?search=City%20Morgue'],
]

function TrackCard({ track, isActive, onToggle }) {
  return (
    <article className={`track-card ${isActive ? 'is-active' : ''}`}>
      <img src={track.art} alt={`Обложка ${track.album}`} />
      <div className="track-copy">
        <div className="track-meta">
          <span>{track.year}</span>
          <span>{track.mood}</span>
        </div>
        <h3>{track.title}</h3>
        <p>{track.story}</p>
      </div>
      <button type="button" className="play-button" onClick={() => onToggle(track)}>
        {isActive ? <Pause size={20} /> : <Play size={20} />}
        <span>{isActive ? 'Пауза' : 'Слушать'}</span>
      </button>
    </article>
  )
}

function AlbumCard({ album }) {
  return (
    <article className="album-card">
      <img src={album.art} alt={`Обложка альбома ${album.title}`} />
      <div>
        <span>{album.year}</span>
        <h3>{album.title}</h3>
        <p>{album.note}</p>
      </div>
    </article>
  )
}

function MemberCard({ member }) {
  return (
    <article className="member-card">
      <img src={member.image} alt={`Портретная карточка ${member.name}`} />
      <div>
        <span>{member.role}</span>
        <h3>{member.name}</h3>
        <p>{member.text}</p>
      </div>
    </article>
  )
}

function App() {
  const audioRef = useRef(null)
  const [activeTrack, setActiveTrack] = useState(null)
  const [selectedEra, setSelectedEra] = useState('all')
  const [playbackError, setPlaybackError] = useState('')

  const filteredTracks =
    selectedEra === 'all'
      ? tracks
      : tracks.filter((track) => track.year === selectedEra)

  const toggleTrack = async (track) => {
    if (activeTrack?.id === track.id) {
      audioRef.current.pause()
      setActiveTrack(null)
      setPlaybackError('')
      return
    }

    audioRef.current.src = track.preview
    setActiveTrack(track)
    setPlaybackError('')

    try {
      await audioRef.current.play()
    } catch {
      setPlaybackError('Если превью не стартовало само, нажми play в аудио-панели.')
    }
  }

  return (
    <main>
      <audio
        className={`audio-player ${activeTrack ? 'show' : ''}`}
        controls={Boolean(activeTrack)}
        ref={audioRef}
        onEnded={() => setActiveTrack(null)}
      />

      <section className="hero-section">
        <div className="noise" />
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <Skull size={18} /> New York trap metal dossier
            </p>
            <h1>CITY MORGUE</h1>
            <p className="lead">
              История ZillaKami и SosMula: от подвала SoundCloud и панк-рэпа до
              финального альбома My Bloody America.
            </p>
            <div className="hero-actions">
              <a href="#tracks" className="primary-link">
                <Volume2 size={19} /> включить треки
              </a>
              <a href="#bio" className="ghost-link">
                <Flame size={19} /> биография
              </a>
            </div>
          </div>
          <div className="hero-art">
            <img src={albumArt.toxic} alt="City Morgue Toxic Boogaloo cover" />
            <img src={albumArt.vol2} alt="City Morgue As Good As Dead cover" />
            <img src={albumArt.mba} alt="City Morgue My Bloody America cover" />
          </div>
        </div>
      </section>

      <section className="ticker">
        <span>trap metal</span>
        <span>hardcore rap</span>
        <span>nu-metal 808</span>
        <span>rage videos</span>
        <span>bloody america</span>
      </section>

      <section id="bio" className="section split">
        <div>
          <p className="eyebrow">
            <Zap size={18} /> кто они
          </p>
          <h2>Группа, которая звучала как драка между рэпом и металом</h2>
        </div>
        <div className="bio-text">
          <p>
            City Morgue - американский дуэт из Нью-Йорка: ZillaKami и SosMula.
            Они появились в 2017 году на волне SoundCloud-андеграунда, но
            быстро стали отдельным явлением: не просто рэперы с тяжёлыми битами,
            а группа с эстетикой хоррора, скейт-панка, ню-метала и уличного
            трэша.
          </p>
          <p>
            В текстах City Morgue много насилия, злости, наркотической
            паранойи, мрачного юмора, отчуждения и бравады. Это не “красивые”
            истории, а гротеск: персонажи как будто живут в городе-комиксе, где
            сирены, татуировки, кровь на постерах и бас вместо воздуха.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="eyebrow">
            <Radio size={18} /> как они двигались
          </p>
          <h2>Полная линия движения</h2>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article key={item.year}>
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="eyebrow">
            <Skull size={18} /> лица проекта
          </p>
          <h2>Роли внутри City Morgue</h2>
        </div>
        <div className="members-grid">
          {members.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      <section id="tracks" className="section">
        <div className="section-head with-controls">
          <div>
            <p className="eyebrow">
              <Volume2 size={18} /> треки с прослушиванием
            </p>
            <h2>Истории треков и 30-секундные превью</h2>
          </div>
          <div className="filters" aria-label="Фильтр по году">
            {['all', '2018', '2019', '2020', '2021', '2023'].map((era) => (
              <button
                type="button"
                key={era}
                className={selectedEra === era ? 'active' : ''}
                onClick={() => setSelectedEra(era)}
              >
                {era === 'all' ? 'Все' : era}
              </button>
            ))}
          </div>
        </div>

        {activeTrack && (
          <div className="now-playing">
            <img src={activeTrack.art} alt="" />
            <div>
              <span>Сейчас играет превью</span>
              <strong>{activeTrack.title}</strong>
              {playbackError && <small>{playbackError}</small>}
            </div>
          </div>
        )}

        <div className="tracks-grid">
          {filteredTracks.map((track) => (
            <TrackCard
              key={track.id}
              track={track}
              isActive={activeTrack?.id === track.id}
              onToggle={toggleTrack}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="eyebrow">
            <Flame size={18} /> альбомы
          </p>
          <h2>Обложки и смысл этапов</h2>
        </div>
        <div className="albums-grid">
          {albums.map((album) => (
            <AlbumCard key={album.title} album={album} />
          ))}
        </div>
      </section>

      <section className="section split final">
        <div>
          <p className="eyebrow">
            <Skull size={18} /> распад
          </p>
          <h2>Почему они разошлись</h2>
        </div>
        <div className="bio-text">
          <p>
            Распад City Morgue не выглядел как один громкий день с точкой. В
            2022 году участники начали говорить, что следующий тур и альбом
            могут стать последними. После My Bloody America дуэт фактически
            закрыл главный цикл: ZillaKami и SosMula пошли в сольные релизы,
            где каждый развивает свою сторону звука.
          </p>
          <p>
            Итог: City Morgue остались как капсула ярости 2017-2024 годов.
            ZillaKami тянет более мелодичный, панк/альт-металлический нерв, а
            SosMula - более трэповую, кричащую, клубно-агрессивную линию.
          </p>
        </div>
      </section>

      <footer>
        <strong>Источники</strong>
        {sources.map(([label, url]) => (
          <a key={url} href={url} target="_blank" rel="noreferrer">
            {label}
          </a>
        ))}
      </footer>
    </main>
  )
}

export default App
