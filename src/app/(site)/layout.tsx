import LayoutHeader from "../_components/Layout/Header";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default async function SiteLayout({ children, modal }: Props)
{
  return (
    <>
      <LayoutHeader />
      <div>
        {children}
        {modal}
      </div>
    </>
  )
}