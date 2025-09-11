import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { sendEmailOTP, verifyEmailOTP } from "@/lib/actions/user.actions";

const OtpModal = ({accountId, email}: {accountId: string, email: string}) => {
  const [isOPen, setIsOpen] = useState(true);
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {

      //API for handling OTP verification
      const sessionId = await verifyEmailOTP({accountId, otp});
      return sessionId;
      toast.success("OTP verified successfully!");
    } catch (error) {
      toast.error("Failed to verify OTP");
      console.log(error);
    }finally {
      setIsLoading(false);
    }
  };

  const resendOtp = async () => {
    if (!accountId || !email) return;
  try {
    await sendEmailOTP({ userId: accountId, email });
    toast.success("OTP resent successfully!");
  } catch (error) {
    console.log(error)
    toast.error("Failed to resend OTP");
  }
  };

  return (
    <AlertDialog open={isOPen} onOpenChange={accountId ? setIsOpen : undefined}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="font-bold flex justify-between items-center">
            Enter Your OTP
            <X className="text-card w-6 h-6 bg-input rounded-full p-1" onClick={() => setIsOpen(false)} />
          </AlertDialogTitle>
          <AlertDialogDescription>We&apos;ve sent an email to <span className="font-semibold">{email}</span></AlertDialogDescription>
        </AlertDialogHeader>
        <InputOTP maxLength={6} value={otp} onChange={setOtp} className="mt-8">
          <InputOTPGroup className="gap-8 text-center">
            <InputOTPSlot index={0} className="text-primary text-lg rounded-lg p-6"/>
            <InputOTPSlot index={1} className="text-primary text-lg rounded-lg p-6"/>
            <InputOTPSlot index={2} className="text-primary text-lg rounded-lg p-6"/>
            <InputOTPSlot index={3} className="text-primary text-lg rounded-lg p-6"/>
            <InputOTPSlot index={4} className="text-primary text-lg rounded-lg p-6"/>
            <InputOTPSlot index={5} className="text-primary text-lg rounded-lg p-6"/>
          </InputOTPGroup>
        </InputOTP>
        <AlertDialogFooter className="flex flex-col gap-4">
          <div className="flex flex-col w-full">
            <AlertDialogAction className="h-12" type="button" onClick={handleSubmit} disabled={otp.length < 6 || isLoading}>
              Continue
            </AlertDialogAction>
            <div className="flex items-center justify-center mt-2">
              Didn&apos;t get the code?
              <Button variant="link" size="sm" className="text-primary ml-2 p-0" onClick={resendOtp} disabled={isLoading}>
                Resend OTP
              </Button>
            </div>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default OtpModal;
