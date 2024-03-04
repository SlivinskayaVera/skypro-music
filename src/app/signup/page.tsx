import WrapperModal from "@/components/WrapperModal/WrapperModal";
import { FormInput } from "@/components/FormInput/FormInput";
import { BtnEnter } from "@/components/BtnEnter/BtnEnter";

export default function SignUpPage() {
  return (
    <WrapperModal>
      <FormInput
        type="text"
        name="login"
        placeholder="Почта"
      />
      <FormInput
        type="password"
        name="password"
        placeholder="Пароль"
      />
      <FormInput
        type="password"
        name="password"
        placeholder="Повторите пароль"
      />
      <BtnEnter title="Зарегистрироваться" />
    </WrapperModal>
  );
}
