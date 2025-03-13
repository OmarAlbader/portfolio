interface IProps {
  email: string;
}

const Aside = ({ email }: IProps) => {
  return (
    <aside className="fixed transform bottom-40 my-0 left-5 text-vertical font-extralight tracking-widest text-sm">
      {email}
    </aside>
  );
};

export default Aside;
