import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { CheckCircle, XCircle, Upload } from 'lucide-react';

export function VerifyPage() {
  const [verificationResult, setVerificationResult] = useState<'valid' | 'invalid' | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [keyContent, setKeyContent] = useState('');

  const handleVerify = async () => {
    setIsVerifying(true);
    
    // Simulate verification process
    setTimeout(() => {
      const isValid = Math.random() > 0.3; // 70% chance of being valid
      setVerificationResult(isValid ? 'valid' : 'invalid');
      setIsVerifying(false);
    }, 2000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setKeyContent(e.target?.result as string);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-medium text-gray-800">
            بررسی صحت کلیدهای CSR
          </h1>
          <p className="text-gray-600">
            برای تأیید صحت کلید CSR خود، محتوای فایل را در زیر قرار دهید یا فایل را آپلود کنید
          </p>
        </div>

        {/* Verification form */}
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <div className="space-y-6">
            {/* File upload */}
            <div className="space-y-2">
              <Label className="text-right">آپلود فایل CSR</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                <input
                  type="file"
                  accept=".csr,.pem,.txt"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center space-y-3"
                >
                  <Upload className="w-12 h-12 text-gray-400" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-700">
                      فایل CSR را انتخاب کنید
                    </p>
                    <p className="text-xs text-gray-500">
                      فرمت‌های پشتیبانی شده: .csr, .pem, .txt
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Manual input */}
            <div className="space-y-2">
              <Label className="text-right">یا محتوای کلید را وارد کنید</Label>
              <Textarea
                value={keyContent}
                onChange={(e) => setKeyContent(e.target.value)}
                placeholder="-----BEGIN CERTIFICATE REQUEST-----
MIICijCCAXICAQAwRTELMAkGA1UEBhMCQVUxEzARBgNVBAgMClNvbWUtU3RhdGUx
ITAfBgNVBAoMGEludGVybmV0IFdpZGdpdHMgUHR5IEx0ZDCCASIwDQYJKoZIhvcN
...
-----END CERTIFICATE REQUEST-----"
                className="min-h-[200px] font-mono text-sm text-right"
                dir="ltr"
              />
            </div>

            {/* Verify button */}
            <div className="flex justify-center">
              <Button
                onClick={handleVerify}
                disabled={!keyContent.trim() || isVerifying}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
              >
                {isVerifying ? 'در حال بررسی...' : 'بررسی صحت کلید'}
              </Button>
            </div>

            {/* Results */}
            {verificationResult && (
              <div className={`rounded-lg p-6 ${
                verificationResult === 'valid' 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-red-50 border border-red-200'
              }`}>
                <div className="flex items-center justify-center space-x-3 space-x-reverse">
                  {verificationResult === 'valid' ? (
                    <>
                      <CheckCircle className="w-8 h-8 text-green-600" />
                      <div className="text-center">
                        <h3 className="text-lg font-medium text-green-800">
                          کلید معتبر است
                        </h3>
                        <p className="text-sm text-green-700">
                          کلید CSR شما از نظر ساختار و امضا صحیح می‌باشد
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-8 h-8 text-red-600" />
                      <div className="text-center">
                        <h3 className="text-lg font-medium text-red-800">
                          کلید نامعتبر است
                        </h3>
                        <p className="text-sm text-red-700">
                          کلید CSR دارای مشکل در ساختار یا امضا می‌باشد
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Information section */}
        <div className="bg-blue-50 rounded-lg p-6 text-right">
          <h3 className="text-lg font-medium text-blue-800 mb-3">
            نکات مهم بررسی کلید CSR
          </h3>
          <ul className="space-y-2 text-sm text-blue-700">
            <li>• فایل CSR باید دارای ساختار صحیح باشد</li>
            <li>• کلید باید توسط مرجع معتبر صادر شده باشد</li>
            <li>• تاریخ انقضای کلید نباید گذشته باشد</li>
            <li>• اطلاعات هویتی موجود در کلید باید صحیح باشد</li>
          </ul>
        </div>
      </div>
    </div>
  );
}