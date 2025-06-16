import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Wrench } from 'lucide-react';

export function OnlineFormPage() {
  const [formData, setFormData] = useState({
    commonName: '',
    organizationType: 'Non-Govermental',
    city: '',
    province: '',
    companyTitle: '',
    position: '',
    email: '',
    nationalId: ''
  });

  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      alert('کلیدهای سه گانه سامانه مودیان با موفقیت تولید شد!');
    }, 2000);
  };

  const provinces = [
    'تهران', 'اصفهان', 'خراسان رضوی', 'فارس', 'خوزستان', 'آذربایجان شرقی',
    'آذربایجان غربی', 'کردستان', 'کرمانشاه', 'لرستان', 'همدان', 'گیلان',
    'مازندران', 'گلستان', 'سمنان', 'البرز', 'قزوین', 'زنجان', 'اردبیل',
    'کرمان', 'یزد', 'سیستان و بلوچستان', 'هرمزگان', 'بوشهر', 'کهگیلویه و بویراحمد',
    'چهارمحال و بختیاری', 'ایلام', 'قم', 'مرکزی'
  ];

  const cities = [
    'تهران', 'اصفهان', 'مشهد', 'شیراز', 'اهواز', 'تبریز', 'کرج', 'قم',
    'رشت', 'اراک', 'کرمان', 'یزد', 'ارومیه', 'بندرعباس', 'بوشهر'
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
            کاربر گرامی، به جهت حفظ حریم خصوصی، هیچ یک از داده ها ثبت و ذخیره و نگهداری نمیگردد. این ابزار صرفا" جهت تسهیل تولید کلیدهای عمومی و اختصاصی و حذف پیچیدگی های استفاده از نرم افزار OpenSSL{' '}
            <a
              href="https://www.gica.ir/portal/APP_Client/UserFiles/document/CertProfileGuideForCSR.pdf"
              className="text-blue-600 underline hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              (راهنمای تولید فایل CSR با استفاده از نرم افزار OpenSSL)
            </a>
            {' '}می باشد.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* First row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label className="text-right text-gray-600 text-xs">
                  استان
                </Label>
                <Select value={formData.province} onValueChange={(value) => handleInputChange('province', value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="انتخاب استان" />
                  </SelectTrigger>
                  <SelectContent>
                    {provinces.map(province => (
                      <SelectItem key={province} value={province}>{province}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-right text-gray-600 text-xs">
                  شهر
                </Label>
                <Select value={formData.city} onValueChange={(value) => handleInputChange('city', value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="انتخاب شهر" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map(city => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-right text-gray-600 text-xs">
                  دولتی / غیردولتی
                </Label>
                <Input
                  value={formData.organizationType}
                  onChange={(e) => handleInputChange('organizationType', e.target.value)}
                  className="text-right"
                  readOnly
                />
              </div>

              <div className="space-y-2">
                <Label className="text-right text-gray-600 text-xs">
                  نام عمومی ( به انگلیسی و بدون فاصله)
                </Label>
                <Input
                  value={formData.commonName}
                  onChange={(e) => handleInputChange('commonName', e.target.value)}
                  placeholder="مثال : owjrayanehgostarsharif"
                  className="text-right"
                />
              </div>
            </div>

            {/* Second row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label className="text-right text-gray-600 text-xs">
                  شناسه ملی
                </Label>
                <Input
                  value={formData.nationalId}
                  onChange={(e) => handleInputChange('nationalId', e.target.value)}
                  placeholder="شناسه ملی ۱۱ رقمی"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-right text-gray-600 text-xs">
                  پست الکترونیک
                </Label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="مثال : orash@iran.ir"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-right text-gray-600 text-xs">
                  نقش / سمت
                </Label>
                <Input
                  value={formData.position}
                  onChange={(e) => handleInputChange('position', e.target.value)}
                  placeholder="مثال : مدیر عامل"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-right text-gray-600 text-xs">
                  عنوان شرکت ( دقیقا مطابق با آگهی تاسیس شرکت )
                </Label>
                <Input
                  value={formData.companyTitle}
                  onChange={(e) => handleInputChange('companyTitle', e.target.value)}
                  placeholder="مثال : اوج رایانه گستر شریف"
                  className="text-right"
                />
              </div>
            </div>

            {/* Submit button */}
            <div className="flex justify-start pt-4">
              <Button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 flex items-center gap-2"
              >
                <Wrench className="w-4 h-4" />
                {isGenerating ? 'در حال تولید...' : 'تولید کلیدهای سه گانه سامانه مودیان'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}