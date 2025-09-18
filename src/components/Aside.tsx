interface IProps {
  email: string;
}

const Aside = ({ email }: IProps) => {
  return (
    <aside className="fixed transform bottom-40 my-0 left-5 text-vertical font-extralight tracking-widest text-sm">
      <a href="mailto:omaratheer233@gmail.com">{email}</a>
    </aside>
  );
};

export default Aside;
