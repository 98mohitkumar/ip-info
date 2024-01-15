"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import { toast } from "sonner";
import Button from "./Button";
import Input from "./InputField";

const validIpPattern =
  /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/;

const IPAddressSearch = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = searchInputRef.current?.value;

    if (query && query?.trim().length > 0) {
      const enteredIP = searchInputRef.current.value;
      const isValidIp = validIpPattern.test(enteredIP);

      if (isValidIp) {
        router.push(`?ip=${enteredIP}`);
      } else {
        toast.error("Invalid IP Address", {
          description: "Please enter a valid IP Address in the format xxx.xxx.xxx.xxx",
        });
      }
    }
  };

  return (
    <form className='flex gap-16 max-sm:w-full' onSubmit={searchHandler}>
      <Input
        ref={searchInputRef}
        type='text'
        placeholder='Enter an IP Address'
        name='ip-address-input'
        autoComplete='off'
        className='font-mono max-sm:w-full'
      />

      <Button background='accent' type='submit'>
        Search
      </Button>
    </form>
  );
};

export default IPAddressSearch;
