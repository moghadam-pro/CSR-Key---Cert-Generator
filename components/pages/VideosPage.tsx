import { ImageWithFallback } from '../figma/ImageWithFallback';
import imgImage from "figma:asset/faf2d0eeff33f2c637f07a1a7841d93807bdb35c.png";
import imgImage1 from "figma:asset/20595318ae6363f38440b584e7019b33c67f92de.png";
import imgImage2 from "figma:asset/f9a83e29897ad14fd392a7b0152343a2d3f64bf8.png";

interface VideoCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
  onPlay: () => void;
}

function PlayButton() {
  return (
    <div className="w-20 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M11 8.96533C11 8.48805 11 8.24941 11.1333 8.11618C11.2444 8.00007 11.4263 7.92744 11.6192 7.9171C11.8406 7.90525 12.1081 8.03429 12.643 8.29239L20.6043 12.3927C21.0688 12.6147 21.3011 12.7257 21.3812 12.8719C21.451 13.0064 21.451 13.1603 21.3812 13.2948C21.3011 13.441 21.0688 13.552 20.6043 13.774L12.643 17.8743C12.1081 18.1324 11.8406 18.2614 11.6192 18.2496C11.4263 18.2392 11.2444 18.1666 11.1333 18.0505C11 17.9173 11 17.6787 11 17.2014V8.96533Z"
          fill="#E1141E"
        />
      </svg>
    </div>
  );
}

function VideoCard({ title, description, date, image, onPlay }: VideoCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      {/* Video thumbnail */}
      <div 
        className="relative h-48 bg-cover bg-center cursor-pointer group"
        style={{ backgroundImage: `url('${image}')` }}
        onClick={onPlay}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayButton />
        </div>
      </div>
      
      {/* Video info */}
      <div className="p-4 text-right space-y-2">
        <h3 className="font-medium text-gray-900 leading-7">
          {title}
        </h3>
        <p className="text-xs text-gray-500">
          {date} | بدون دیدگاه
        </p>
        <p className="text-sm text-gray-600 leading-6">
          {description}
        </p>
        <button className="text-xs text-gray-600 font-medium hover:text-gray-800 transition-colors">
          ادامه مطلب ...
        </button>
      </div>
    </div>
  );
}

export function VideosPage() {
  const handleVideoPlay = (title: string) => {
    alert(`پخش ویدیو: ${title}`);
  };

  const videos = [
    {
      title: "کاربرد بابت در نرم افزار حسابداری اوراش",
      description: "نرم افزارهای یکپارچه مالی به گونه ای طراحی می شوند که کاربران هر بخش بتوانند در قسمت های مختلف سیستم",
      date: "۱۵ مهر ۱۴۰۳",
      image: imgImage
    },
    {
      title: "ارسال اطلاعات به سامانه مؤدیان",
      description: "نرم افزارهای یکپارچه مالی به گونه ای طراحی می شوند که کاربران هر بخش بتوانند در قسمت های مختلف سیستم",
      date: "۱۵ مهر ۱۴۰۳",
      image: imgImage
    },
    {
      title: "دریافت گواهی امضاء مهر سازمانی (اشخاص حقوقی)",
      description: "نرم افزارهای یکپارچه مالی به گونه ای طراحی می شوند که کاربران هر بخش بتوانند در قسمت های مختلف سیستم",
      date: "۱۵ مهر ۱۴۰۳",
      image: imgImage1
    },
    {
      title: "دریافت شناسه یکتای حافظه ی مالیاتی",
      description: "نرم افزارهای یکپارچه مالی به گونه ای طراحی می شوند که کاربران هر بخش بتوانند در قسمت های مختلف سیستم",
      date: "۱۵ مهر ۱۴۰۳",
      image: imgImage2
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="space-y-8">
        {/* Banner text */}
        <div className="bg-blue-50 rounded-lg p-6 text-right">
          <h2 className="text-lg font-medium text-red-600 mb-2">
            نکته:
          </h2>
          <p className="text-gray-700 leading-7">
            حتما اطلاعات تولید شده را ذخیره سازی کرده و تمام مراحل 3 گانه طبق آموزش های زیر را با فایل های ذخیره سازی شده انجام بدهید. توجه : در نظر داشته باشید در صورت گم کردن فایل های تولید شده و تولید مجدد فایل ، تکمیل فرایند اتصال به سامانه در ادامه مسیر به مشکل خواهد خورد و بایستی تمامی مراحل را از ابتدا انجام دهید.
          </p>
        </div>

        {/* Videos grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              title={video.title}
              description={video.description}
              date={video.date}
              image={video.image}
              onPlay={() => handleVideoPlay(video.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}