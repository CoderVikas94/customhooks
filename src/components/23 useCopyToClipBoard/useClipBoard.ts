import { useState } from "react";
import copy from "copy-to-clipboard";

interface CopyToClipboardOptions {
  debug?: boolean;
  message?: string;
}

interface CopyToClipboardResult {
  value: string | undefined;
  success: boolean | undefined;
}

export default function useCopyToClipboard(): [
  (text: string, options?: CopyToClipboardOptions) => void,
  CopyToClipboardResult
] {
  const [value, setValue] = useState<string | undefined>();
  const [success, setSuccess] = useState<boolean | undefined>();

  const copyToClipboard = (text: string, options?: CopyToClipboardOptions): void => {
    const result = copy(text, options);
    if (result) setValue(text);
    setSuccess(result);
  };

  return [copyToClipboard, { value, success }];
}
