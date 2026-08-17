import { Layer } from "@carbon/react";

export function ProductShot({ src, alt, caption, eager = false }) {
  return (
    <figure className="wfm-product-shot">
      <Layer className="wfm-product-frame">
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
        />
      </Layer>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
