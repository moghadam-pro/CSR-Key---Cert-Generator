import svgPaths from "./svg-0q21464288";
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
    <div className="h-24 relative shrink-0 w-[1400px]" data-name="banner-text">
      <div className="box-border content-stretch flex flex-col gap-2 h-24 items-end justify-center leading-[0] not-italic p-0 relative text-right w-[1400px]">
        <div className="font-['Estedad:Bold',_sans-serif] relative shrink-0 text-[#e1141e] text-[18px] w-full">
          <p className="block leading-[normal]" dir="auto">
            نکته:
          </p>
        </div>
        <div className="font-['Estedad:Regular',_sans-serif] relative shrink-0 text-[#292929] text-[0px] w-full">
          <p className="leading-[28px] text-[16px]" dir="auto">
            <span>{`کاربر گرامی، به جهت حفظ حریم خصوصی، هیچ یک از داده ها ثبت و ذخیره و نگهداری نمیگردد. این ابزار صرفا" جهت تسهیل تولید کلیدهای عمومی و اختصاصی و حذف پیچیدگی های استفاده از نرم افزار OpenSSL `}</span>
            <span className="text-[#337ab7]">(</span>
            <a
              className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] cursor-pointer font-['Estedad:Regular',_sans-serif] not-italic text-[#337ab7]"
              href="https://www.gica.ir/portal/APP_Client/UserFiles/document/CertProfileGuideForCSR.pdf"
            >
              <span
                className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] leading-[28px]"
                href="https://www.gica.ir/portal/APP_Client/UserFiles/document/CertProfileGuideForCSR.pdf"
              >
                راهنمای تولید فایل CSR با استفاده از نرم افزار OpenSSL
              </span>
            </a>
            <span className="text-[#337ab7]">)</span>
            <span>{` می باشد.`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="relative shrink-0 w-full" data-name="row">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-end p-0 relative w-full">
        <div className="basis-0 font-['Yekan_Bakh_FaNum:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#999999] text-[12px] text-right">
          <p className="block leading-[normal]" dir="auto">
            نام عمومی ( به انگلیسی و بدون فاصله)
          </p>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="text"
    >
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-end p-[8px] relative w-full">
          <div className="basis-0 font-['Peyda:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#292929] text-[14px] text-right">
            <p
              className="block leading-[24px] whitespace-pre-wrap"
              dir="auto"
            >{`مثال :  owjrayanehgostarsharif`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Inp() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-lg shrink-0 w-full"
      data-name="inp"
    >
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-end px-2 py-0 relative w-full">
          <Text />
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="input"
    >
      <div className="box-border content-stretch flex flex-col gap-0.5 items-end justify-center p-0 relative w-full">
        <Row1 />
        <Inp />
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="relative shrink-0 w-full" data-name="row">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-end p-0 relative w-full">
        <div className="basis-0 font-['Yekan_Bakh_FaNum:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#999999] text-[12px] text-right">
          <p className="block leading-[normal]" dir="auto">
            دولتی / غیردولتی
          </p>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="text"
    >
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-end p-[8px] relative w-full">
          <div className="basis-0 font-['Peyda:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#292929] text-[14px] text-right">
            <p className="block leading-[24px]" dir="auto">
              Non-Govermental
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Inp1() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-lg shrink-0 w-full"
      data-name="inp"
    >
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-end px-2 py-0 relative w-full">
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="input"
    >
      <div className="box-border content-stretch flex flex-col gap-0.5 items-end justify-center p-0 relative w-full">
        <Row2 />
        <Inp1 />
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="relative shrink-0 w-full" data-name="row">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-end p-0 relative w-full">
        <div className="basis-0 font-['Yekan_Bakh_FaNum:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#999999] text-[12px] text-right">
          <p className="block leading-[normal]" dir="auto">
            شهر
          </p>
        </div>
      </div>
    </div>
  );
}

function ChevronDown16() {
  return (
    <div className="relative shrink-0 size-6" data-name="chevron-down-16">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="chevron-down-16">
          <path
            d="M8 10L12 14L16 10"
            id="Icon"
            stroke="var(--stroke-0, #525252)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function LeftIcon5() {
  return (
    <div className="relative shrink-0 size-8" data-name="left-icon">
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative size-8">
        <ChevronDown16 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="text"
    >
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-end p-[8px] relative w-full">
          <div className="basis-0 font-['Peyda:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#292929] text-[14px] text-right">
            <p className="block leading-[24px]" dir="auto">
              انتخاب شهر
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Inp2() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-lg shrink-0 w-full"
      data-name="inp"
    >
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-end px-2 py-0 relative w-full">
          <LeftIcon5 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="input"
    >
      <div className="box-border content-stretch flex flex-col gap-0.5 items-end justify-center p-0 relative w-full">
        <Row3 />
        <Inp2 />
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="relative shrink-0 w-full" data-name="row">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-end p-0 relative w-full">
        <div className="basis-0 font-['Yekan_Bakh_FaNum:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#999999] text-[12px] text-right">
          <p className="block leading-[normal]" dir="auto">
            استان
          </p>
        </div>
      </div>
    </div>
  );
}

function ChevronDown17() {
  return (
    <div className="relative shrink-0 size-6" data-name="chevron-down-16">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="chevron-down-16">
          <path
            d="M8 10L12 14L16 10"
            id="Icon"
            stroke="var(--stroke-0, #525252)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function LeftIcon7() {
  return (
    <div className="relative shrink-0 size-8" data-name="left-icon">
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative size-8">
        <ChevronDown17 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="text"
    >
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-end p-[8px] relative w-full">
          <div className="basis-0 font-['Peyda:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#292929] text-[14px] text-right">
            <p className="block leading-[24px]" dir="auto">
              انتخاب استان
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Inp3() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-lg shrink-0 w-full"
      data-name="inp"
    >
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-end px-2 py-0 relative w-full">
          <LeftIcon7 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="input"
    >
      <div className="box-border content-stretch flex flex-col gap-0.5 items-end justify-center p-0 relative w-full">
        <Row4 />
        <Inp3 />
      </div>
    </div>
  );
}

function Row5() {
  return (
    <div className="relative shrink-0 w-full" data-name="row">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-end p-0 relative w-full">
        <Input />
        <Input1 />
        <Input2 />
        <Input3 />
      </div>
    </div>
  );
}

function Row6() {
  return (
    <div className="relative shrink-0 w-full" data-name="row">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-end p-0 relative w-full">
        <div className="basis-0 font-['Yekan_Bakh_FaNum:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#999999] text-[12px] text-right">
          <p className="block leading-[normal]" dir="auto">
            عنوان شرکت ( دقیقا مطابق با آگهی تاسیس شرکت )
          </p>
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="text"
    >
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-end p-[8px] relative w-full">
          <div className="basis-0 font-['Peyda:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#292929] text-[14px] text-right">
            <p className="block leading-[24px]" dir="auto">
              مثال : اوج رایانه گستر شریف
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Inp4() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-lg shrink-0 w-full"
      data-name="inp"
    >
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-end px-2 py-0 relative w-full">
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="input"
    >
      <div className="box-border content-stretch flex flex-col gap-0.5 items-end justify-center p-0 relative w-full">
        <Row6 />
        <Inp4 />
      </div>
    </div>
  );
}

function Row7() {
  return (
    <div className="relative shrink-0 w-full" data-name="row">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-end p-0 relative w-full">
        <div className="basis-0 font-['Yekan_Bakh_FaNum:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#999999] text-[12px] text-right">
          <p className="block leading-[normal]" dir="auto">
            نقش / سمت
          </p>
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="text"
    >
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-end p-[8px] relative w-full">
          <div className="basis-0 font-['Peyda:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#292929] text-[14px] text-right">
            <p className="block leading-[24px]" dir="auto">
              مثال : مدیر عامل
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Inp5() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-lg shrink-0 w-full"
      data-name="inp"
    >
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-end px-2 py-0 relative w-full">
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Input5() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="input"
    >
      <div className="box-border content-stretch flex flex-col gap-0.5 items-end justify-center p-0 relative w-full">
        <Row7 />
        <Inp5 />
      </div>
    </div>
  );
}

function Row8() {
  return (
    <div className="relative shrink-0 w-full" data-name="row">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-end p-0 relative w-full">
        <div className="basis-0 font-['Yekan_Bakh_FaNum:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#999999] text-[12px] text-right">
          <p className="block leading-[normal]" dir="auto">
            پست الکترونیک
          </p>
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="text"
    >
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-end p-[8px] relative w-full">
          <div className="basis-0 font-['Peyda:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#292929] text-[14px] text-right">
            <p className="block leading-[24px]" dir="auto">
              مثال : orash@iran.ir
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Inp6() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-lg shrink-0 w-full"
      data-name="inp"
    >
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-end px-2 py-0 relative w-full">
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Input6() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="input"
    >
      <div className="box-border content-stretch flex flex-col gap-0.5 items-end justify-center p-0 relative w-full">
        <Row8 />
        <Inp6 />
      </div>
    </div>
  );
}

function Row9() {
  return (
    <div className="relative shrink-0 w-full" data-name="row">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-end p-0 relative w-full">
        <div className="basis-0 font-['Yekan_Bakh_FaNum:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#999999] text-[12px] text-right">
          <p className="block leading-[normal]" dir="auto">
            شناسه ملی
          </p>
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="text"
    >
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-end p-[8px] relative w-full">
          <div className="basis-0 font-['Peyda:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#292929] text-[14px] text-right">
            <p className="block leading-[24px]" dir="auto">
              شناسه ملی ۱۱ رقمی
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Inp7() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-lg shrink-0 w-full"
      data-name="inp"
    >
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-end px-2 py-0 relative w-full">
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Input7() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="input"
    >
      <div className="box-border content-stretch flex flex-col gap-0.5 items-end justify-center p-0 relative w-full">
        <Row9 />
        <Inp7 />
      </div>
    </div>
  );
}

function Row10() {
  return (
    <div className="relative shrink-0 w-full" data-name="row">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-end p-0 relative w-full">
        <Input4 />
        <Input5 />
        <Input6 />
        <Input7 />
      </div>
    </div>
  );
}

function Col() {
  return (
    <div className="relative shrink-0 w-full" data-name="col">
      <div className="box-border content-stretch flex flex-col items-center justify-center p-0 relative w-full">
        <Row5 />
        <Row10 />
      </div>
    </div>
  );
}

function Txt() {
  return (
    <div className="relative shrink-0" data-name="txt">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-2 py-0 relative">
          <div className="font-['Yekan_Bakh_FaNum:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap">
            <p className="block leading-[24px] whitespace-pre" dir="auto">
              تولید کلیدهای سه گانه سامانه مودیان
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tool02() {
  return (
    <div className="relative shrink-0 size-6" data-name="tool-02">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="tool-02">
          <path
            d={svgPaths.pe221400}
            id="Icon"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function RightIcon() {
  return (
    <div className="relative shrink-0 size-6" data-name="right-icon">
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative size-6">
        <Tool02 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[#e1141e] relative rounded-lg shrink-0"
      data-name="button"
    >
      <div className="absolute border border-[#e1141e] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-end p-[8px] relative">
          <Txt />
          <RightIcon />
        </div>
      </div>
    </div>
  );
}

function Row11() {
  return (
    <div className="relative shrink-0 w-full" data-name="row">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-0 py-2 relative w-full">
          <Button />
        </div>
      </div>
    </div>
  );
}

function Row12() {
  return (
    <div className="relative shrink-0 w-full" data-name="row">
      <div className="box-border content-stretch flex flex-col gap-3 items-end justify-start p-0 relative w-full">
        <Col />
        <Row11 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-[1400px]" data-name="container">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-12 items-center justify-center px-0 py-12 relative w-[1400px]">
          <BannerText />
          <Row12 />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="section"
    >
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative size-full">
        <Container />
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

function Li() {
  return (
    <div className="relative rounded shrink-0 w-full" data-name="li">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[4px] relative w-full">
          <ListIcon />
          <div className="font-['Estedad:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#292929] text-[14px] text-nowrap text-right">
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

function Li2() {
  return (
    <div
      className="bg-[#fff6f7] relative rounded shrink-0 w-full"
      data-name="li"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[4px] relative w-full">
          <ListIcon2 />
          <div className="font-['Estedad:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#e1141e] text-[14px] text-nowrap text-right">
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

export default function ScreenCsrOnlineForm() {
  return (
    <div
      className="bg-neutral-100 relative size-full"
      data-name="[screen]/csr-online-form"
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