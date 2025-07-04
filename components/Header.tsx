import { ImageWithFallback } from './figma/ImageWithFallback';
import imgHeader from "figma:asset/847cca9397588cb27be76fc2ca041313b1b80d0d.png";

interface FeatureProps {
  text: string;
}

function FeatureIcon() {
  return (
    <div className="relative shrink-0 size-6">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 15C8.68629 15 6 12.3137 6 9V3.44444C6 3.0306 6 2.82367 6.06031 2.65798C6.16141 2.38021 6.38021 2.16141 6.65798 2.06031C6.82367 2 7.0306 2 7.44444 2H16.5556C16.9694 2 17.1763 2 17.342 2.06031C17.6198 2.16141 17.8386 2.38021 17.9397 2.65798C18 2.82367 18 3.0306 18 3.44444V9C18 12.3137 15.3137 15 12 15ZM12 15V18M18 4H20.5C20.9659 4 21.1989 4 21.3827 4.07612C21.6277 4.17761 21.8224 4.37229 21.9239 4.61732C22 4.80109 22 5.03406 22 5.5V6C22 6.92997 22 7.39496 21.8978 7.77646C21.6204 8.81173 20.8117 9.62038 19.7765 9.89778C19.395 10 18.93 10 18 10M6 4H3.5C3.03406 4 2.80109 4 2.61732 4.07612C2.37229 4.17761 2.17761 4.37229 2.07612 4.61732C2 4.80109 2 5.03406 2 5.5V6C2 6.92997 2 7.39496 2.10222 7.77646C2.37962 8.81173 3.18827 9.62038 4.22354 9.89778C4.60504 10 5.07003 10 6 10M7.44444 22H16.5556C16.801 22 17 21.801 17 21.5556C17 19.5919 15.4081 18 13.4444 18H10.5556C8.59188 18 7 19.5919 7 21.5556C7 21.801 7.19898 22 7.44444 22Z"
          stroke="#E1141E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

function Feature({ text }: FeatureProps) {
  return (
    <div className="flex items-center gap-2 px-2 py-1">
      <FeatureIcon />
      <span className="text-sm text-gray-700 text-right">{text}</span>
    </div>
  );
}

export function Header() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat w-full min-h-[200px] relative"
      style={{ backgroundImage: `url('${imgHeader}')` }}
    >
      <div className="flex items-center justify-between p-8 h-full">
        <div className="flex-1 text-right">
          <h1 className="text-lg font-medium text-gray-800 leading-normal max-w-md">
            اولین ارائه دهنده سرویس تسهیل کننده امضاء دیجیتال سامانه مودیان در کشور
          </h1>
        </div>
        
        <div className="flex gap-4">
          <Feature text="بیش از یک میلیون کلید تولید شده" />
          <Feature text="بیش از ۴ میلیون بازدید تا امروز" />
          <Feature text="بیش از ۲۵۰،۰۰۰ دانلود نسخه آفلاین" />
        </div>
      </div>
    </div>
  );
}