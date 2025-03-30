
import React, { useEffect, useState } from 'react';
import { Check, Copy, Loader2 } from 'lucide-react';
import { getUpiId } from '@/lib/data';
import { toast } from 'sonner';

interface QRCodePaymentProps {
  amount: number;
  onComplete: () => void;
}

const QRCodePayment: React.FC<QRCodePaymentProps> = ({ amount, onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasCopied, setHasCopied] = useState(false);
  const upiId = getUpiId();
  const qrValue = `upi://pay?pa=${upiId}&am=${amount}&cu=INR`;
  
  // For demo purposes, simulate QR code loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleCopyUPI = () => {
    navigator.clipboard.writeText(upiId);
    setHasCopied(true);
    toast.success('UPI ID copied to clipboard');
    
    setTimeout(() => {
      setHasCopied(false);
    }, 3000);
  };

  // In a real app, we'd verify payment completion
  // For demo, we'll simulate it with a button
  const handleManualVerification = () => {
    toast.success('Payment verified successfully');
    onComplete();
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-xl font-serif text-center mb-4">Scan QR Code to Pay</h3>
      <p className="text-center mb-6 text-charcoal-light">
        Amount: <span className="font-medium text-gold-dark">${amount.toFixed(2)}</span>
      </p>
      
      {isLoading ? (
        <div className="w-64 h-64 mx-auto flex items-center justify-center bg-cream-light rounded">
          <Loader2 className="h-12 w-12 text-gold animate-spin" />
        </div>
      ) : (
        <div className="w-64 h-64 mx-auto bg-white p-2 rounded-md border-2 border-cream-dark animate-fade-in">
          {/* For demo purposes we're generating a fake QR */}
          <img 
            src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(qrValue)}`} 
            alt="Payment QR Code"
            className="w-full h-full"
          />
        </div>
      )}
      
      <div className="mt-6 flex items-center justify-center">
        <div className="relative flex items-center px-4 py-2 bg-cream-light rounded-lg">
          <span className="text-charcoal font-medium">{upiId}</span>
          <button 
            onClick={handleCopyUPI}
            className="ml-3 text-gold hover:text-gold-dark transition-colors"
            aria-label="Copy UPI ID"
          >
            {hasCopied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
      </div>
      
      <div className="mt-8 space-y-4">
        <p className="text-sm text-center text-charcoal-light">
          Please complete the payment using any UPI app by scanning the QR code or paying to the UPI ID above.
        </p>
        
        <button
          onClick={handleManualVerification}
          className="w-full py-3 px-6 bg-charcoal-dark text-white rounded-md hover:bg-charcoal transition-colors"
        >
          I've Completed the Payment
        </button>
        
        <p className="text-xs text-center text-charcoal-light">
          Note: For demonstration purposes, clicking the button above will simulate a completed payment.
        </p>
      </div>
    </div>
  );
};

export default QRCodePayment;
