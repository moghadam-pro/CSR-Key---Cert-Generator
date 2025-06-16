import svgPaths from "./svg-2s2ya4fa62";
import imgHeader from "figma:asset/847cca9397588cb27be76fc2ca041313b1b80d0d.png";

function Group1() {
  return (
    <div className="absolute h-[730.04px] left-[1236px] top-[127px] w-[619px]">
      <div className="absolute bottom-[-5.337%] left-[-24.233%] right-[-24.233%] top-[-20.547%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 919 919"
        >
          <g id="Group 1">
            <g id="Logo">
              <path
                d={svgPaths.p270e9a00}
                id="Vector"
                stroke="var(--stroke-0, #E1141E)"
                strokeOpacity="0.08"
                strokeWidth="2"
              />
            </g>
            <g filter="url(#filter0_f_1_221)" id="Ellipse 3">
              <circle
                cx="459.5"
                cy="459.5"
                fill="var(--fill-0, #E1141E)"
                fillOpacity="0.08"
                r="309.5"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="919"
              id="filter0_f_1_221"
              width="919"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_221"
                stdDeviation="75"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function FeatureIcon() {
  return (
    <div className="relative shrink-0 size-6" data-name="Feature Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Feature Icon">
          <path
            d={svgPaths.p1cd72280}
            id="Icon"
            stroke="var(--stroke-0, #E1141E)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Feature() {
  return (
    <div className="relative rounded shrink-0" data-name="feature">
      <div className="flex flex-row justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-end p-[8px] relative">
          <div className="font-['Yekan_Bakh_FaNum:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#292929] text-[14px] text-nowrap text-right">
            <p className="block leading-[24px] whitespace-pre" dir="auto">
              بیش از یک میلیون کلید تولید شده
            </p>
          </div>
          <FeatureIcon />
        </div>
      </div>
    </div>
  );
}

function FeatureIcon1() {
  return (
    <div className="relative shrink-0 size-6" data-name="Feature Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Feature Icon">
          <path
            d={svgPaths.p1cd72280}
            id="Icon"
            stroke="var(--stroke-0, #E1141E)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Feature1() {
  return (
    <div className="relative rounded shrink-0" data-name="feature">
      <div className="flex flex-row justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-end p-[8px] relative">
          <div className="font-['Yekan_Bakh_FaNum:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#292929] text-[14px] text-nowrap text-right">
            <p className="block leading-[24px] whitespace-pre" dir="auto">
              بیش از ۴ میلیون بازدید تا امروز
            </p>
          </div>
          <FeatureIcon1 />
        </div>
      </div>
    </div>
  );
}

function FeatureIcon2() {
  return (
    <div className="relative shrink-0 size-6" data-name="Feature Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Feature Icon">
          <path
            d={svgPaths.p1cd72280}
            id="Icon"
            stroke="var(--stroke-0, #E1141E)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Feature2() {
  return (
    <div className="relative rounded shrink-0" data-name="feature">
      <div className="flex flex-row justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-end p-[8px] relative">
          <div className="font-['Yekan_Bakh_FaNum:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#292929] text-[14px] text-nowrap text-right">
            <p className="block leading-[24px] whitespace-pre" dir="auto">
              بیش از ۲۵۰،۰۰۰ دانلود نسخه آفلاین
            </p>
          </div>
          <FeatureIcon2 />
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="relative shrink-0" data-name="row">
      <div className="box-border content-stretch flex flex-row gap-4 items-start justify-center p-0 relative">
        <Feature />
        <Feature1 />
        <Feature2 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat relative shrink-0 w-full"
      data-name="header"
      style={{ backgroundImage: `url('${imgHeader}')` }}
    >
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-end p-[32px] relative w-full">
          <Row />
          <div className="basis-0 font-['Estedad:Bold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#292929] text-[18px] text-right">
            <p className="block leading-[normal]" dir="auto">
              اولین ارائه دهنده سرویس تسهیل کننده امضاء دیجیتال سامانه مودیان در
              کشور
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BannerText() {
  return (
    <div className="relative shrink-0 w-[800px]" data-name="banner-text">
      <div className="box-border content-stretch flex flex-col gap-5 items-end justify-center leading-[0] not-italic p-0 relative text-right w-[800px]">
        <div className="font-['Estedad:Bold',_sans-serif] relative shrink-0 text-[#e1141e] text-[18px] w-full">
          <p className="block leading-[normal]" dir="auto">
            امضای الکترونیک CSR چیست ؟
          </p>
        </div>
        <div className="font-['Estedad:Regular',_sans-serif] relative shrink-0 text-[#292929] text-[0px] w-full">
          <p className="leading-[36px] text-[16px]" dir="auto">
            <span>{`امضای الکترونیک CSR یک گواهی امضای الکترونیک است که دریافت آن برای تمامی مشمولان سامانه مودیان لازم و اجباریست. این سرویس در واقع اقدام اصلی در `}</span>
            <a
              className="cursor-pointer font-['Estedad:Regular',_sans-serif] not-italic text-[#337ab7]"
              href="https://orash.ir/blog/guide-to-registration-in-the-taxpayer-system/"
            >
              <span
                className="leading-[36px]"
                href="https://orash.ir/blog/guide-to-registration-in-the-taxpayer-system/"
              >
                مراحل ثبت نام سامانه مودیان
              </span>
            </a>
            <span>{` می باشد که تایید مشخصات هویتی کاربران را میسر می نماید. سرویس تسهیل کننده صدور امضای دیجیتال یا CSR شامل اطلاعاتی همچون اطلاعات دارنده امضای الکترونیک ، تاریخ انقضا کلید و امضای دیجیتال صادر کننده گواهی مهر سازمانی می باشد. کلید CSR به شما این امکان را می دهد تا علاوه بر ثبت نام در`}</span>
            <span className="font-['Estedad:Regular',_sans-serif] not-italic text-[#337ab7]">
              &nbsp;
            </span>
            <a
              className="cursor-pointer font-['Estedad:Regular',_sans-serif] not-italic text-[#337ab7]"
              href="https://orash.ir/blog/taxpayers-system-store-terminals/"
            >
              <span
                className="leading-[36px]"
                href="https://orash.ir/blog/taxpayers-system-store-terminals/"
              >
                سامانه مودیان
              </span>
            </a>
            <span className="font-['Estedad:Regular',_sans-serif] not-italic text-[#337ab7]">
              &nbsp;
            </span>
            و ارسال صورتحساب الکترونیکی ، در تعاملات الکترونیکی ، شرکت در مناقصه
            ها و مزایده ها و دریافت سفته های الکترونیکی بدون نگرانی اقدام
            نمایید. گروه نرم افزاری اوراش اولین ارائه کننده سرویس تسهیل کننده
            صدور امضای دیجیتال در کشور است.
          </p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-[1400px]" data-name="container">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-12 items-center justify-center px-0 py-12 relative w-[1400px]">
          <div className="h-[236.112px] relative shrink-0 w-[329.874px]">
            <div className="absolute bottom-[-0.212%] left-[-0.152%] right-[-0.152%] top-[-0.212%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 332 238"
              >
                <path
                  d={svgPaths.p22798400}
                  id="Vector 30"
                  stroke="var(--stroke-0, #999999)"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <BannerText />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="relative shrink-0 w-full" data-name="section">
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative w-full">
        <Container />
      </div>
    </div>
  );
}

function BannerText1() {
  return (
    <div className="relative shrink-0 w-[800px]" data-name="banner-text">
      <div className="box-border content-stretch flex flex-col gap-5 items-end justify-center leading-[0] not-italic p-0 relative text-right w-[800px]">
        <div className="font-['Estedad:Bold',_sans-serif] relative shrink-0 text-[#e1141e] text-[18px] w-full">
          <p className="block leading-[normal]" dir="auto">
            دریافت گواهی مهر سازمانی یا CSR
          </p>
        </div>
        <div className="font-['Estedad:Regular',_sans-serif] relative shrink-0 text-[#292929] text-[16px] w-full">
          <p className="block leading-[36px]" dir="auto">
            دریافت گواهی مهرسازمانی یا امضای دیجیتال یکی از مراحل ثبت نام و
            ارسال صورتحساب الکترونیکی به سامانه مؤدیان می باشد. این گواهی به
            عنوان تأییدی برای هویت صاحب کلید و اعتبار آن در فعالیت‌های
            الکترونیکی استفاده می‌شوند. سرویس تسهیل کننده CSR، با کمک فناوری‌های
            امنیتی پیشرفته، رمزنگاری شده از این رو غیر قابل جعل بوده و توسط
            سامانه‌های مختلف تأیید می‌شود. دریافت امضای دیجیتال، پیامدهای مثبتی
            را نیز برای افراد و سازمان‌های مختلف به همراه دارد. در صورت دسترسی
            به مهر سازمانی می‌توانید به ارزش و اعتبار شرکت خود بیفزایید. به
            علاوه، دیگر نگرانی از بابت بروز هر گونه تقلبی در اطلاعات محرمانه
            شرکت و همین طور اسناد ندارید.
          </p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-[1400px]" data-name="container">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-12 items-center justify-center px-0 py-12 relative w-[1400px]">
          <BannerText1 />
          <div
            className="h-[258px] relative shrink-0 w-[388px]"
            data-name="Vector"
          >
            <div className="absolute bottom-[-0.194%] left-[-0.129%] right-[-0.112%] top-[-0.3%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 390 260"
              >
                <path
                  d={svgPaths.pd046a98}
                  id="Vector"
                  stroke="var(--stroke-0, #707070)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="relative shrink-0 w-full" data-name="section">
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative w-full">
        <Container1 />
      </div>
    </div>
  );
}

function Wrap() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="wrap"
    >
      <div className="box-border content-stretch flex flex-col items-end justify-start p-0 relative size-full">
        <Header />
        <Section />
        <Section1 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-full min-h-px min-w-px relative rounded-3xl shadow-[0px_0px_20px_0px_rgba(0,0,0,0.12)] shrink-0"
      data-name="content"
    >
      <div className="box-border content-stretch flex flex-col items-end justify-start overflow-clip p-0 relative size-full">
        <Wrap />
      </div>
    </div>
  );
}

function LogoText() {
  return (
    <div className="h-6 relative shrink-0 w-[60px]" data-name="Logo Text">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 60 24"
      >
        <g id="Logo Text">
          <path
            d={svgPaths.p13fd6f80}
            fill="var(--fill-0, #CCCCCC)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function LogoIcon() {
  return (
    <div className="relative shrink-0 size-6" data-name="Logo Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Logo Icon">
          <path
            d={svgPaths.p1acf3980}
            fill="var(--fill-0, #CCCCCC)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div className="relative shrink-0" data-name="logo">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center p-0 relative">
        <LogoText />
        <LogoIcon />
      </div>
    </div>
  );
}

function RowHeader() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="row-header"
    >
      <div className="flex flex-row items-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-end justify-start p-[24px] relative size-full">
          <Logo1 />
        </div>
      </div>
    </div>
  );
}

function ListIcon() {
  return (
    <div className="relative shrink-0 size-6" data-name="List Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="List Icon">
          <path
            d={svgPaths.p129aea80}
            id="Icon"
            stroke="var(--stroke-0, #E1141E)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Li() {
  return (
    <div
      className="bg-[#fff6f7] relative rounded shrink-0 w-full"
      data-name="li"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[4px] relative w-full">
          <ListIcon />
          <div className="font-['Estedad:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#e1141e] text-[14px] text-nowrap text-right">
            <p className="block leading-[24px] whitespace-pre" dir="auto">
              چیست ؟ CSR
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListIcon1() {
  return (
    <div className="relative shrink-0 size-6" data-name="List Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="List Icon">
          <g id="Icon">
            <path
              d={svgPaths.p1fad4f80}
              stroke="var(--stroke-0, #525252)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d={svgPaths.p3673e2a0}
              stroke="var(--stroke-0, #525252)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Li1() {
  return (
    <div className="relative rounded shrink-0 w-full" data-name="li">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[4px] relative w-full">
          <ListIcon1 />
          <div className="font-['Estedad:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#292929] text-[14px] text-nowrap text-right">
            <p className="block leading-[24px] whitespace-pre" dir="auto">
              فیلم های آموزشی
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListIcon2() {
  return (
    <div className="relative shrink-0 size-6" data-name="List Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="List Icon">
          <path
            d={svgPaths.p390f2f80}
            id="Icon"
            stroke="var(--stroke-0, #525252)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Li2() {
  return (
    <div className="relative rounded shrink-0 w-full" data-name="li">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[4px] relative w-full">
          <ListIcon2 />
          <div className="font-['Estedad:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#292929] text-[14px] text-nowrap text-right">
            <p className="block leading-[24px] whitespace-pre" dir="auto">
              نسخه آنلاین
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListIcon3() {
  return (
    <div className="relative shrink-0 size-6" data-name="List Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="List Icon">
          <path
            d={svgPaths.p330a6ac0}
            id="Icon"
            stroke="var(--stroke-0, #525252)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Li3() {
  return (
    <div className="relative rounded shrink-0 w-full" data-name="li">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[4px] relative w-full">
          <ListIcon3 />
          <div className="font-['Estedad:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#292929] text-[14px] text-nowrap text-right">
            <p className="block leading-[24px] whitespace-pre" dir="auto">
              دانلود نسخه آفلاین
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListIcon4() {
  return (
    <div className="relative shrink-0 size-6" data-name="List Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="List Icon">
          <path
            d={svgPaths.p2322bd40}
            id="Icon"
            stroke="var(--stroke-0, #525252)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Li4() {
  return (
    <div className="relative rounded shrink-0 w-full" data-name="li">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[4px] relative w-full">
          <ListIcon4 />
          <div className="font-['Estedad:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#292929] text-[14px] text-nowrap text-right">
            <p className="block leading-[24px] whitespace-pre" dir="auto">
              بررسی صحت کلیدها
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Ul() {
  return (
    <div className="relative shrink-0 w-full" data-name="ul">
      <div className="flex flex-col items-end relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-end justify-start p-[16px] relative w-full">
          <Li />
          <Li1 />
          <Li2 />
          <Li3 />
          <Li4 />
        </div>
      </div>
    </div>
  );
}

function ListIcon5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="List Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_1_215)" id="List Icon">
          <path
            d={svgPaths.p3926580}
            id="Icon"
            stroke="var(--stroke-0, #525252)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_215">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Li5() {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0" data-name="li">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-2 py-1 relative">
          <ListIcon5 />
          <div className="font-['Estedad:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#707070] text-[12px] text-nowrap text-right">
            <p className="block leading-[normal] whitespace-pre" dir="auto">
              حالت شب
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RowHeader1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="row-header"
    >
      <div className="flex flex-col items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-center justify-end p-[24px] relative size-full">
          <Li5 />
          <div className="font-['Estedad:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#999999] text-[10px] text-nowrap text-right">
            <p className="block leading-[normal] whitespace-pre" dir="auto">
              توسعه داده شده توسط تیم تولید اوراش © 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidePanel() {
  return (
    <div className="h-full relative shrink-0 w-[250px]" data-name="side-panel">
      <div className="box-border content-stretch flex flex-col h-full items-center justify-center p-0 relative w-[250px]">
        <RowHeader />
        <Ul />
        <RowHeader1 />
      </div>
    </div>
  );
}

export default function ScreenCsrDetail() {
  return (
    <div
      className="bg-neutral-100 relative size-full"
      data-name="[screen]/csr-detail"
    >
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center p-[24px] relative size-full">
          <Group1 />
          <Content />
          <SidePanel />
        </div>
      </div>
    </div>
  );
}