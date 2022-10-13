import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode;
}

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
}
TextInputIcon.displayName = "TextInput.Root";

function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}
TextInputIcon.displayName = "TextInput.Icon";

export function TextInputDefault({ ...rest }: TextInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 placeholder:text-gray-400 text-sx outline-none"
      {...rest}
    />
  );
}

TextInputIcon.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputDefault,
  Icon: TextInputIcon,
};
