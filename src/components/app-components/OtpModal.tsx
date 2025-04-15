import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";
import { X } from "lucide-react";

const OtpModal = () => {
  const [isOPen, setIsOpen] = useState(true);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const resendOtp = () => {
    //resend otp logic
  };

  return (
    <AlertDialog open={isOPen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="font-bold flex justify-between items-center">
            Enter Your OTP
            <X className="text-card w-6 h-6 bg-input rounded-full p-1" onClick={() => setIsOpen(false)} />
          </AlertDialogTitle>
        </AlertDialogHeader>
        <InputOTP maxLength={6}>
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
            <AlertDialogAction className="h-12" type="button">
              Continue
            </AlertDialogAction>
            <div className="flex items-center justify-center mt-2">
              Didn&apos;t get the code?
              <Link href="#" className="text-primary ml-2">
                Click to resend
              </Link>
            </div>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default OtpModal;
