import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";
import Image from "next/image";

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
      <AlertDialogTrigger>Open</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="font-bold">
            Enter Your OTP
          </AlertDialogTitle>
          <Image
            src="/assets/icons/close.svg"
            alt="cancel"
            className="text-primary"
            width={16}
            height={16}
            onClick={() => setIsOpen(false)}
          />
        </AlertDialogHeader>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
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
