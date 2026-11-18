import Grey_container from "./grey_container/component";
import White_container from "./white_container/component";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>
        {children}
        <div>this is container layout</div>
      </main>
    </>
  );
}
