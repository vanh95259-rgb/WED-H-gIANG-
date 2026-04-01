function Icon({ type, className = "h-5 w-5" }) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": true,
  };

  switch (type) {
    case "map-pin":
      return (
        <svg {...props}>
          <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10Z" />
          <circle cx="12" cy="11" r="2.5" />
        </svg>
      );
    case "mountain":
      return (
        <svg {...props}>
          <path d="M3 20h18" />
          <path d="m5 20 6-10 3 5 2-3 3 8" />
        </svg>
      );
    case "sailboat":
      return (
        <svg {...props}>
          <path d="M12 3v12" />
          <path d="m12 3 6 6h-6" />
          <path d="m12 7-5 5h5" />
          <path d="M4 20c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1" />
        </svg>
      );
    case "users":
      return (
        <svg {...props}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
          <circle cx="9.5" cy="7" r="3" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 4.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "phone":
      return (
        <svg {...props}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.77.68 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.25a2 2 0 0 1 2.11-.45c.83.33 1.7.56 2.6.68A2 2 0 0 1 22 16.92Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...props}>
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden={true}>
          <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.03 10.13 11.93v-8.44H7.08v-3.5h3.05V9.41c0-3.03 1.79-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.5h-2.79V24C19.61 23.1 24 18.1 24 12.07Z" />
        </svg>
      );
    case "camera":
      return (
        <svg {...props}>
          <path d="M4 7h3l2-2h6l2 2h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      );
    case "compass":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="m15.5 8.5-2.5 7-7 2.5 2.5-7 7-2.5Z" />
        </svg>
      );
    case "badge-check":
      return (
        <svg {...props}>
          <path d="m12 3 2.2 1.5 2.6-.2 1.3 2.3 2.4 1-.5 2.6 1.3 2.2-1.7 1.9.1 2.6-2.4.9-1.1 2.4-2.6-.3L12 21l-2.2-1.5-2.6.2-1.3-2.3-2.4-1 .5-2.6-1.3-2.2 1.7-1.9-.1-2.6 2.4-.9 1.1-2.4 2.6.3L12 3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    default:
      return null;
  }
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 max-w-3xl leading-7 text-slate-600">{description}</p> : null}
    </div>
  );
}

function ContactInput({ placeholder, className = "", as = "input" }) {
  if (as === "textarea") {
    return (
      <textarea
        className={`min-h-[140px] rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500 ${className}`}
        placeholder={placeholder}
      />
    );
  }

  return (
    <input
      className={`rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500 ${className}`}
      placeholder={placeholder}
    />
  );
}

export default function HaGiangCityPage() {
  const highlights = [
    {
      title: "Quy hoạch khu du lịch",
      text: "Định hướng phát triển đồng bộ với phân khu nghỉ dưỡng, vui chơi, trải nghiệm văn hóa và không gian sinh thái bền vững.",
    },
    {
      title: "Tiềm năng đầu tư",
      text: "Khai thác lợi thế cảnh quan, khí hậu, bản sắc dân tộc và nhu cầu du lịch trải nghiệm đang tăng mạnh tại Hà Giang.",
    },
    {
      title: "Phát triển cộng đồng",
      text: "Kết nối người dân địa phương vào chuỗi dịch vụ lưu trú, ẩm thực, hướng dẫn viên và sản phẩm đặc sản vùng cao.",
    },
  ];

  const zones = [
    "Khu đón tiếp và trung tâm thông tin du khách",
    "Khu nghỉ dưỡng sinh thái và homestay cao cấp",
    "Khu trải nghiệm văn hóa dân tộc và chợ phiên",
    "Khu ẩm thực đặc sản Hà Giang",
    "Khu check-in cảnh quan, ngắm núi và săn mây",
    "Khu hoạt động ngoài trời: trekking, cắm trại, xe địa hình",
  ];

  const goals = [
    "Tạo điểm đến du lịch đặc trưng cấp vùng",
    "Tăng thời gian lưu trú và chi tiêu của du khách",
    "Thu hút doanh nghiệp đầu tư dịch vụ du lịch",
    "Bảo tồn văn hóa bản địa gắn với phát triển kinh tế",
  ];

  const highlightsNatural = [
    {
      title: "Sông Nho Quế",
      text: "Dòng sông xanh ngọc nổi tiếng chảy qua hẻm Tu Sản, phù hợp phát triển du lịch cảnh quan và trải nghiệm đường sông.",
      img: "https://images.unsplash.com/photo-1600077103909-3c8d3c7c3c6f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Hẻm Tu Sản",
      text: "Cảnh quan hùng vĩ với vách đá dựng đứng, là điểm nhấn quan trọng trong phát triển du lịch sinh thái.",
      img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Du lịch trải nghiệm",
      text: "Chèo kayak, đi thuyền, trekking và khám phá thiên nhiên nguyên sơ quanh khu vực Nho Quế.",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const stats = [
    { label: "Phân khu chính", value: "06+" },
    { label: "Sản phẩm du lịch", value: "12+" },
    { label: "Điểm check-in", value: "20+" },
    { label: "Mô hình hợp tác", value: "05" },
  ];

  const timeline = [
    {
      step: "Giai đoạn 1",
      title: "Hoàn thiện hạ tầng đón khách",
      text: "Phát triển khu đón tiếp, bãi đỗ xe, trung tâm thông tin và các điểm check-in chính.",
    },
    {
      step: "Giai đoạn 2",
      title: "Mở rộng dịch vụ trải nghiệm",
      text: "Triển khai thuyền du lịch, kayak, tuyến trekking, khu ẩm thực và chợ đặc sản.",
    },
    {
      step: "Giai đoạn 3",
      title: "Phát triển nghỉ dưỡng và đầu tư",
      text: "Kêu gọi hợp tác homestay cao cấp, glamping, resort sinh thái và sản phẩm nghỉ dưỡng dài ngày.",
    },
  ];

  const fanpageFeatures = [
    {
      icon: "facebook",
      title: "Fanpage chính",
      text: "Kết nối khách hàng qua bài đăng tour, album ảnh, livestream và inbox tư vấn.",
    },
    {
      icon: "camera",
      title: "Nội dung hình ảnh",
      text: "Tận dụng ảnh cảnh quan, check-in và cảm nhận thực tế để tăng tương tác.",
    },
    {
      icon: "compass",
      title: "Tour nổi bật",
      text: "Phù hợp giới thiệu tour ngắn ngày, tour trải nghiệm Sông Nho Quế và hành trình khám phá Hà Giang.",
    },
    {
      icon: "badge-check",
      title: "Tăng niềm tin",
      text: "Hiển thị fanpage trực tiếp trên website để khách dễ kiểm tra thông tin và liên hệ.",
    },
  ];

  const productItems = [
    "Tour ngắm Sông Nho Quế bằng thuyền",
    "Kayak và thể thao mặt nước",
    "Trekking và săn mây trên cao",
    "Combo lưu trú - ẩm thực - trải nghiệm",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <div>
            <p className="text-lg font-bold text-slate-900">Hà Giang Tour</p>
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-700">Song Nho Que Destination</p>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <a href="#gallery" className="transition hover:text-emerald-700">Hình ảnh</a>
            <a href="#tong-quan" className="transition hover:text-emerald-700">Tổng quan</a>
            <a href="#fanpage" className="transition hover:text-emerald-700">Fanpage</a>
            <a href="#lien-he" className="transition hover:text-emerald-700">Liên hệ</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-black text-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/50 to-emerald-900/40" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur">
                Dự án phát triển khu du lịch Sông Nho Quế - Hà Giang
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
                Khơi mở điểm đến biểu tượng của du lịch Hà Giang
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 md:text-lg">
                Website giới thiệu định hướng phát triển khu du lịch gắn với Sông Nho Quế, Hẻm Tu Sản và các sản phẩm trải nghiệm thiên nhiên, văn hóa, nghỉ dưỡng và đầu tư.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#gallery"
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-emerald-800 shadow-lg transition hover:-translate-y-0.5"
                >
                  Xem hình ảnh
                </a>
                <a
                  href="#lien-he"
                  className="rounded-2xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Liên hệ hợp tác
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                  <p className="text-3xl font-bold">{item.value}</p>
                  <p className="mt-2 text-sm text-white/80">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Thư viện nổi bật
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Hình ảnh điểm đến</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            Hệ thống ảnh giới thiệu cảnh quan chủ đạo phục vụ truyền thông dự án, quảng bá du lịch và thu hút nhà đầu tư.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlightsNatural.map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-slate-200">
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Video giới thiệu</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Trải nghiệm Sông Nho Quế</h2>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-black shadow-xl ring-1 ring-slate-200">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/2OEL4P1Rz04"
                title="Video trải nghiệm Sông Nho Quế"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section id="tong-quan" className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <SectionTitle eyebrow="Tổng quan dự án" title="Nền tảng phát triển khu du lịch trọng điểm" />

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <Icon type="mountain" className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="fanpage" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionTitle
                eyebrow="Kênh truyền thông"
                title="Kết nối với fanpage Hà Giang Tour"
                description="Bổ sung điểm chạm mạng xã hội để tăng độ tin cậy thương hiệu, cập nhật hình ảnh hành trình thực tế, video trải nghiệm và hỗ trợ khách hàng đặt tour nhanh hơn."
              />

              <div className="mt-6 grid gap-4">
                {fanpageFeatures.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      <Icon type={item.icon} className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <p className="mt-1 text-sm leading-7 text-slate-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-slate-900 p-5 text-white shadow-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <Icon type="facebook" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Hà Giang Tour Du Lịch</h3>
                    <p className="text-sm text-white/70">Kênh Facebook hỗ trợ truyền thông và đặt tour</p>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-[1.5rem] bg-white">
                  <div className="aspect-[4/3]">
                    <iframe
                      title="Hà Giang Tour Facebook Page"
                      className="h-full w-full"
                      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhagiangtourdulich&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    />
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="https://www.facebook.com/hagiangtourdulich?locale=vi_VN"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5"
                  >
                    Mở fanpage
                    <Icon type="arrow-right" className="h-4 w-4" />
                  </a>
                  <a
                    href="#lien-he"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                  >
                    Đăng ký tư vấn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <SectionTitle
                eyebrow="Phân khu chức năng"
                title="Cấu trúc khai thác du lịch"
                description="Quy hoạch khu du lịch theo hướng trải nghiệm hoàn chỉnh, tăng thời gian lưu trú, mở rộng chi tiêu của du khách và tạo dư địa hợp tác đầu tư lâu dài."
              />
            </div>

            <div className="grid gap-3">
              {zones.map((z) => (
                <div key={z} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <Icon type="map-pin" className="mt-0.5 h-5 w-5 text-emerald-700" />
                  <span>{z}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <SectionTitle eyebrow="Mục tiêu chiến lược" title="Giá trị mang lại" />
            <ul className="mt-6 space-y-4">
              {goals.map((g) => (
                <li key={g} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <Icon type="users" className="mt-0.5 h-5 w-5 text-cyan-700" />
                  <span className="text-slate-700">{g}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-emerald-700 to-cyan-700 p-8 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Sản phẩm chủ lực</p>
            <h2 className="mt-2 text-3xl font-bold">Trải nghiệm có thể khai thác</h2>
            <div className="mt-6 grid gap-4">
              {productItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <Icon type="sailboat" className="h-5 w-5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <SectionTitle eyebrow="Tiến độ đề xuất" title="Lộ trình phát triển" />

          <div className="grid gap-6 md:grid-cols-3">
            {timeline.map((item) => (
              <div key={item.step} className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
                  {item.step}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <SectionTitle eyebrow="Bản đồ vị trí" title="Kết nối điểm đến" />

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=S%C3%B4ng%20Nho%20Qu%E1%BA%BF%2C%20H%C3%A0%20Giang&z=12&output=embed"
                title="Bản đồ Sông Nho Quế"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="lien-he" className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Kết nối hợp tác</p>
            <h2 className="mt-2 text-3xl font-bold">Liên hệ phát triển dự án</h2>
            <p className="mt-4 leading-7 text-white/80">
              Phù hợp cho nhà đầu tư, đơn vị lữ hành, đối tác vận hành và tổ chức truyền thông muốn đồng hành phát triển khu du lịch Sông Nho Quế.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Icon type="phone" className="h-5 w-5 text-emerald-300" />
                <span>0988 888 888</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon type="mail" className="h-5 w-5 text-emerald-300" />
                <span>duan@hagiangtourism.vn</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon type="calendar" className="h-5 w-5 text-emerald-300" />
                <span>Sẵn sàng tiếp nhận đề xuất hợp tác</span>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-2xl font-bold">Gửi thông tin đăng ký</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <ContactInput placeholder="Họ và tên" />
              <ContactInput placeholder="Số điện thoại" />
              <ContactInput placeholder="Email" className="md:col-span-2" />
              <ContactInput placeholder="Nội dung quan tâm: tour, đầu tư, truyền thông..." className="md:col-span-2" />
              <ContactInput placeholder="Thông điệp của bạn" className="md:col-span-2" as="textarea" />
            </div>

            <button className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-emerald-700 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5">
              Gửi liên hệ
              <Icon type="arrow-right" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3 md:px-10">
          <div>
            <h3 className="text-xl font-bold">Hà Giang Tour</h3>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Website giới thiệu định hướng phát triển khu du lịch Sông Nho Quế kết hợp trải nghiệm thiên nhiên, truyền thông số và kết nối khách hàng đa kênh.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Điều hướng</p>
            <div className="mt-4 grid gap-3 text-sm text-white/80">
              <a href="#gallery">Thư viện hình ảnh</a>
              <a href="#tong-quan">Tổng quan dự án</a>
              <a href="#fanpage">Fanpage Facebook</a>
              <a href="#lien-he">Liên hệ hợp tác</a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Kết nối</p>
            <div className="mt-4 space-y-3 text-sm text-white/80">
              <p>Facebook: Hà Giang Tour Du Lịch</p>
              <p>Hotline: 0988 888 888</p>
              <p>Email: duan@hagiangtourism.vn</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function __testables__() {
  return {
    iconTypes: [
      "map-pin",
      "mountain",
      "sailboat",
      "users",
      "phone",
      "mail",
      "calendar",
      "arrow-right",
      "facebook",
      "camera",
      "compass",
      "badge-check",
    ],
    sectionAnchors: ["gallery", "tong-quan", "fanpage", "lien-he"],
  };
}
