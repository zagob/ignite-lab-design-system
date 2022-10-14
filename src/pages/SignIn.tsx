import { Checkbox } from "@radix-ui/react-checkbox";
import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Button } from "../components/Button/Button";
import { Heading } from "../components/Heading/Heading";
import { Text } from "../components/Text/Text";
import { TextInput } from "../components/TextInput/TextInput";
import { Logo } from "../Logo";
import axios from "axios";

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    await axios.post("/sessions", {
      email: "matheus@gmail.com",
      password: "1234",
    });

    setIsUserSignedIn(true);
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo className="" />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e começe a usar!
        </Text>
      </header>

      <form
        onSubmit={handleSignIn}
        className="flex flex-col gap-4 w-full max-w-sm mt-10"
      >
        {isUserSignedIn && <Text>Login realizado com sucesso!</Text>}

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              placeholder="Digite sua senha"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a
            href="#"
            className="text-gray-400 underline hover:text-gray-200 transition-all"
          >
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size="sm">
          <a
            href="#"
            className="text-gray-400 underline hover:text-gray-200 transition-all"
          >
            Não possui conta? crie uma agora
          </a>
        </Text>
      </footer>
    </div>
  );
}
