interface Props {
  title: string;
  description?: string;
  icons?: string;
}

const Metadata = ({ title, description, icons }: Props) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {icons && <link rel="icon" href={icons} />}
    </>
  );
};

export default Metadata;
