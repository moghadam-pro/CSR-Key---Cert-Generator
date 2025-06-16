import { Download } from 'lucide-react';
import { Button } from '../ui/button';

export function OfflinePage() {
  const handleDownload = () => {
    // Simulate download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'CSR-Offline-Tool.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    alert('دانلود آغاز شد! فایل نسخه آفلاین CSR در حال دانلود است.');
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="space-y-8">
        {/* Banner text */}
        <div className="bg-blue-50 rounded-lg p-6 text-right">
          <h2 className="text-lg font-medium text-red-600 mb-2">
            نکته:
          </h2>
          <div className="space-y-2 text-gray-700 leading-7">
            <p>
              کاربر گرامی، به منظور حفظ حریم خصوصی دانلود نسخه آفلاین CSR بدون دسترسی به اینترنت خواهد بود و فایل ها بر روی سیستم شما تولید خواهند شد.
            </p>
            <p>
              دانلود نسخه آفلاین CSR این قابلیت را به شما میدهد که شما فرم را بر روی ویندوز تکمیل کنید
            </p>
          </div>
        </div>

        {/* Download card */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 shadow-lg max-w-md w-full relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-4 -left-4 w-32 h-32 opacity-10">
              <svg className="w-full h-full rotate-12" fill="none" viewBox="0 0 99 128">
                <path
                  d="M0 127.106V0H46.7151V9.41524H37.3721V18.8305H46.7151V28.2457H37.3721V37.661H46.7151V47.0762H37.3721V56.4914H46.7151V65.9067H56.0582V56.4914H46.7151V47.0762H56.0582V37.661H46.7151V28.2457H56.0582V18.8305H46.7151V9.41524H56.0582V0H70.0306V28.2881H98.1018V127.106H0ZM56.0582 70.6143H37.3721V103.568H56.0582V70.6143ZM51.3866 98.5682H42.0436V89.1529H51.3866V98.5682ZM74.7442 0H75.8887L98.1018 22.3847V23.2462H74.7442V0Z"
                  fill="#E1141E"
                />
              </svg>
            </div>

            <div className="relative text-center space-y-6">
              {/* Download icon */}
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Download className="w-8 h-8 text-red-600" />
                </div>
              </div>

              {/* Text content */}
              <div className="space-y-3 text-right">
                <h3 className="text-lg font-medium text-gray-800">
                  دریافت فایل نسخه آفلاین
                </h3>
                <p className="text-sm text-red-600">
                  نسخه تحت ویندوز (XP/Vista/7/10/11)
                </p>
              </div>

              {/* Download button */}
              <Button
                onClick={handleDownload}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                دانلود نسخه آفلاین
              </Button>

              {/* Additional info */}
              <div className="text-xs text-gray-500 text-center space-y-1">
                <p>حجم فایل: ~2.5 مگابایت</p>
                <p>سازگار با تمامی نسخه های ویندوز</p>
                <p>بدون نیاز به اتصال اینترنت</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-lg p-6 shadow-sm border text-center space-y-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24">
                <path
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h4 className="font-medium text-gray-800">امنیت بالا</h4>
            <p className="text-sm text-gray-600">
              تمامی عملیات بر روی سیستم شما انجام می‌شود
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border text-center space-y-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24">
                <path
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h4 className="font-medium text-gray-800">سرعت بالا</h4>
            <p className="text-sm text-gray-600">
              تولید سریع کلیدهای CSR بدون وابستگی به اینترنت
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border text-center space-y-3">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24">
                <path
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h4 className="font-medium text-gray-800">رایگان</h4>
            <p className="text-sm text-gray-600">
              استفاده کاملاً رایگان از تمامی امکانات
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}