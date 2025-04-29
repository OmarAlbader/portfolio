interface IProps {
  email: string;
  name: string;
}

const Footer = ({ email, name }: IProps) => {
  return (
    <footer className="text-center mt-30 mb-10">
      <a
        href="mailto:omaratheer233@gmail.com"
        className="anton tracking-wider text-4xl my-5"
      >
        {email}
      </a>
      <p className="text-lg font-extralight">
        Copyright © 2025{" "}
        <span className="underline font-medium underline-offset-4">{name}</span>
      </p>
    </footer>
  );
};

export default Footer;
