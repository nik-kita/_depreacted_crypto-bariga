import CssHead from "../components/CssHead.tsx";
import HiApi from "../islands/HiApi.tsx";

export default function Home() {
  return (
    <>
      <CssHead importMetaUrl={import.meta.url} />
      <div class="wrapper">
        <HiApi />
      </div>
    </>
  );
}
