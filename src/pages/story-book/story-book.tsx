import { Label } from "@/shared/ui/label";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Themes, TypesButton } from "@/shared/ui/button/button";

const ICON = (
  <svg
    viewBox="64 64 896 896"
    focusable="false"
    data-icon="search"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
  </svg>
);

const StoryBook = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <Button typeButton={TypesButton.primary}>Редактировать сайт</Button>
      <br />
      <Button typeButton={TypesButton.failed}>Удалить сайт</Button>
      <br />
      <Button typeButton={TypesButton.success}>Успешная кнопка</Button>
      <br />
      <Button theme={Themes.default}>Дефолтная кнопка</Button>
      <br />
      <Button color="#000">Кастомная кнопка</Button>
      <br />
      <Input type="text" name="field1" defaultValue="" onChange={() => void 0} />
      <br />
      <Label forValue="password" label="Пароль" />
      <Input type="password" name="password" defaultValue="" onChange={() => void 0} />
      <br />
      <Label forValue="password" label="Имя" block error />
      <Input
        type="text"
        error="Имя должно быть заполнено"
        name="firstname"
        defaultValue=""
        onChange={() => void 0}
      />
      <br />
      <Input type="email" name="email" defaultValue="" onChange={() => void 0} />
      <br />
      <Input type="text" name="email" defaultValue="" rightIcon={ICON} onChange={() => void 0} />
    </div>
  );
};

export default StoryBook;
