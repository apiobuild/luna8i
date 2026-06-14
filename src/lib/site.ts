export const basePath = process.env.NODE_ENV === "production" ? "/luna8i" : "";

// Next applies basePath itself to file-convention routes (e.g. opengraph-image),
// so metadataBase must be the bare origin, not prefixed with basePath.
export const siteUrl = "https://apiobuild.com";
