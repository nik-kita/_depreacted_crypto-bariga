import CssHead from "../components/CssHead.tsx";

export default function Monitor() {
  return (
    <>
      <CssHead importMetaUrl={import.meta.url} />
      <div class="main parentFlexColCenter fullBlockSizeV">
        <pre>hello</pre>
        <hr />
        <pre>world</pre>
      </div>
    </>
  );
}
