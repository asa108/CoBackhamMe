const CONTENTS = {
  TOPTEXTS: [
    "あの人気のコスメがスマホで試せちゃう！？😍",
    "試してみたかったあのコスメをどこにいてもスマホのブラウザだけで試し塗りが出来ちゃいます♩",
    "詳しくは下にスクロール👇"
  ],
  TITLES: ["AI", "AR", "DESIGN", "UI/UX", "FRONT", "END"],
  TOPSUBTEXTS: [
    "We know what it takes to develop a successful AI/AR products.",
    "That's why we deliver success and make your apps stand out in the market."
  ],
  PRODUCTS: {
    title: "PRODUCTS",
    products: {
      MAHOUMAKE: {
        title: "「MAHOU MAKE」",
        texts: [
          "韓国コスメの",
          "バーチャルメイクカメラ📷",
          "Wake up to Make up,\nRight here Right Now!😂😂"
        ],
        url: "https://mahoumake.com",
        media: {
          title: "MAHOU MAKE",
          description:
            "スマホのブラウザ上で動画のバーチャルコスメを実現、AIによるフェイス検出、CMSによるコスメデータ管理、仮想環境による環境の冗長化",
          tag: ["AI", "AR", "FRONTEND", "UI/UX"],
          links: ["https://mahoumake.com"],
          items: [
            "https://storage.googleapis.com/co_backham_me/works/MAHOUMAKE_32.mp4"
          ]
        }
      }
    }
  },
  CAREER: {
    title: "CAREER",
    description: ["Let’s create something valuable together."],
    jobs: [
      {
        title: "DESIGNER",
        url: "https://www.jobantenna.jp/at/17001/offer/292820/",
        active: false
      },
      {
        title: "SENIER ENGINEER",
        url: "https://www.jobantenna.jp/at/17001/offer/291487/",
        active: true
      },
      {
        title: "FRONTEND ENGINEER",
        url: "https://www.jobantenna.jp/at/17001/offer/285823/",
        active: false
      },
      {
        title: "PYTHON ENGINEER",
        url: "https://www.jobantenna.jp/at/17001/offer/285820/",
        active: false
      },
      {
        title: "MARKETING PLANNER",
        url: "https://www.jobantenna.jp/at/17001/offer/285827/",
        active: true
      }
    ]
  },
  WORKS: {
    title: "WORKS",
    list: [
      {
        key: "banto",
        title: "CYDAS banto",
        description:
          "目標設定・進捗管理サービス「Banto」フロントエンド設計・実装をVue.jsで行いました",
        tag: ["FRONTEND", "JAVASCRIPT", "VUE"],
        links: [{ label: "banto", url: "https://banto.jp/" }],
        items: [
          "https://storage.googleapis.com/co_backham_me/works/banto_ui1.jpg",
          "https://storage.googleapis.com/co_backham_me/works/banto_ui2.jpg",
          "https://storage.googleapis.com/co_backham_me/works/banto_ui3.jpg"
        ]
      },
      {
        key: "nailholic",
        title: "KOSE NAILHOLIC",
        description:
          "膨大な数の爪の形状の学習、200以上のネイルを3D上でシュミレート、iOS/Androidアプリに実装しました",
        tag: ["AI", "AR", "APP", "C#", "UNITY", "PYTHON"],
        links: [
          { label: "NAIL HOLIC", url: "https://www.kose.co.jp/nailholic/" },
          { label: "ios", url: "https://apps.apple.com/us/app/id1526411199" },
          {
            label: "android",
            url:
              "https://play.google.com/store/apps/details?id=jp.co.kose.nailholic"
          }
        ],
        items: [
          "https://storage.googleapis.com/co_backham_me/works/nailholic_splash.jpg"
        ],
        items_movies: [
          "https://storage.googleapis.com/co_backham_me/works/nailholic.mp4"
        ]
      },
      {
        key: "okinawa_iju",
        title: "おきなわ島ぐらし",
        description:
          "沖縄県公式移住情報サイト。情報設計、UI設計、システムを全面的にリプレース。モバイルに最適化し、リニューアル後は「沖縄 + 移住」で常に検索結果の１位を獲得し以降１位を維持し、月間のアクセス数が前年比で1.5倍に増加しました。",
        tag: ["FRONTEND", "JAVASCRIPT", "VUE", "WORDPRESS", "CI", "NODE.JS"],
        links: [
          {
            label: "沖縄県公式移住応援サイト おきなわ島ぐらし",
            url: "https://okinawa-iju.jp/"
          }
        ],
        items: [
          "https://storage.googleapis.com/co_backham_me/works/iju-1.jpg",
          "https://storage.googleapis.com/co_backham_me/works/iju-2.jpg",
          "https://storage.googleapis.com/co_backham_me/works/iju-3.jpg",
          "https://storage.googleapis.com/co_backham_me/works/iju-4.jpg"
        ]
      }
    ]
  },
  COMPANY: {
    title: "COMPANY",
    images: {
      title: "OFFICE",
      description: "",
      links: [null],
      items: [
        "https://storage.googleapis.com/co_backham_me/works/office2.jpg",
        "https://storage.googleapis.com/co_backham_me/works/office1.jpg",
        "https://storage.googleapis.com/co_backham_me/works/office3.jpg",
        "https://storage.googleapis.com/co_backham_me/works/office6.jpg",
        "https://storage.googleapis.com/co_backham_me/works/office7.jpg",
        "https://storage.googleapis.com/co_backham_me/works/office8.jpg",
        "https://storage.googleapis.com/co_backham_me/works/office5.jpg",
        "https://storage.googleapis.com/co_backham_me/works/office4.jpg"
      ]
    },
    info: {
      name: "バッカム株式会社",
      address: "〒901-2131 沖縄県浦添市牧港 3-22-5 🗺",
      map: "https://goo.gl/maps/3WbtfS3remAxJB1z5",
      mail: "victoria@backham.me",
      tel: "090-8497-5761",
      established: "2014.1",
      outline: "AI,AR,Programming,Design,3D,UI/UX"
    }
  }
};

export { CONTENTS };
