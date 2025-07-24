// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { useTheme } from "next-themes";
// import dynamic from "next/dynamic";
// import {
//   fetchSimpleIcons,
//   ICloud,
//   renderSimpleIcon,
//   SimpleIcon,
// } from "react-icon-cloud";

// //  Dynamically import Cloud with SSR disabled
// const Cloud = dynamic(
//   () => import("react-icon-cloud").then((mod) => mod.Cloud),
//   {
//     ssr: false,
//   }
// );

// //  Updated cloud config with better error handling
// const cloudProps: Omit<ICloud, "children"> = {
//   containerProps: {
//     style: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       width: "100%",
//       height: "500px",
//       paddingTop: 40,
//     },
//   },
//   options: {
//     reverse: true,
//     depth: 1,
//     wheelZoom: false,
//     imageScale: 2,
//     activeCursor: "default",
//     tooltip: "native",
//     initial: [0.1, -0.1],
//     clickToFront: 500,
//     tooltipDelay: 0,
//     outlineColour: "#0000",
//     maxSpeed: 0.04,
//     minSpeed: 0.02,
//     // Add these to prevent NaN errors
//     freezeActive: false,
//     shuffleTags: true,
//     shape: "sphere",
//     radiusX: 1,
//     radiusY: 1,
//     radiusZ: 1,
//   },
// };

// //  Enhanced icon rendering with error handling
// const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
//   const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
//   const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
//   const minContrastRatio = theme === "dark" ? 2 : 1.2;

//   try {
//     return renderSimpleIcon({
//       icon,
//       bgHex,
//       fallbackHex,
//       minContrastRatio,
//       size: 42,
//       aProps: {
//         href: undefined,
//         target: undefined,
//         rel: undefined,
//         onClick: (e: any) => e.preventDefault(),
//       },
//     });
//   } catch (error) {
//     console.warn(`Failed to render icon: ${icon.slug}`, error);
//     return null;
//   }
// };

// type DynamicCloudProps = {
//   iconSlugs: string[];
// };

// type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

// export function IconCloud({ iconSlugs }: DynamicCloudProps) {
//   const [data, setData] = useState<IconData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const { theme } = useTheme();

//   useEffect(() => {
//     const loadIcons = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         // Filter out problematic slugs that commonly cause 404s
//         const validSlugs = iconSlugs.filter((slug) => {
//           // Common problematic slugs - replace with working alternatives
//           const problematicSlugs = ["java"]; // Add more if needed
//           return !problematicSlugs.includes(slug);
//         });

//         // Add working alternatives
//         const updatedSlugs = iconSlugs.map((slug) => {
//           if (slug === "java") return "openjdk"; // Use openjdk instead of java
//           return slug;
//         });

//         const iconData = await fetchSimpleIcons({ slugs: updatedSlugs });
//         setData(iconData);
//       } catch (err) {
//         console.error("Failed to fetch icons:", err);
//         setError("Failed to load icons");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadIcons();
//   }, [iconSlugs]);

//   const renderedIcons = useMemo(() => {
//     if (!data || loading) return null;

//     const icons = Object.values(data.simpleIcons)
//       .map((icon) => renderCustomIcon(icon, theme || "light"))
//       .filter(Boolean); // Remove null values from failed renders

//     return icons.length > 0 ? icons : null;
//   }, [data, theme, loading]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center w-full h-[500px]">
//         <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
//       </div>
//     );
//   }

//   if (error || !renderedIcons) {
//     return (
//       <div className="flex justify-center items-center w-full h-[500px]">
//         <p className="text-gray-500">Unable to load skill icons</p>
//       </div>
//     );
//   }

//   return (
//     <Cloud {...cloudProps}>
//       <>{renderedIcons}</>
//     </Cloud>
//   );
// }


//-------------------------------------------------------------------------------------------------------


"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import {
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

//  Dynamically import Cloud with SSR disabled
const Cloud = dynamic(
  () => import("react-icon-cloud").then((mod) => mod.Cloud),
  {
    ssr: false,
  }
);

//  Updated cloud config with better error handling
const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "500px",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    // Add these to prevent NaN errors
    freezeActive: false,
    shuffleTags: true,
    shape: "sphere",
    radiusX: 1,
    radiusY: 1,
    radiusZ: 1,
  },
};

//  Enhanced icon rendering with error handling
const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  try {
    return renderSimpleIcon({
      icon,
      bgHex,
      fallbackHex,
      minContrastRatio,
      size: 42,
      aProps: {
        href: undefined,
        target: undefined,
        rel: undefined,
        onClick: (e: any) => e.preventDefault(),
      },
    });
  } catch (error) {
    console.warn(`Failed to render icon: ${icon.slug}`, error);
    return null;
  }
};

type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const loadIcons = async () => {
      try {
        setLoading(true);
        setError(null);

        // Filter out problematic slugs that commonly cause 404s
        const validSlugs = iconSlugs.filter((slug) => {
          // Common problematic slugs - replace with working alternatives
          const problematicSlugs = ["java"]; // Add more if needed
          return !problematicSlugs.includes(slug);
        });

        // Add working alternatives
        const updatedSlugs = iconSlugs.map((slug) => {
          if (slug === "java") return "openjdk"; // Use openjdk instead of java
          return slug;
        });

        const iconData = await fetchSimpleIcons({ slugs: updatedSlugs });
        setData(iconData);
      } catch (err) {
        console.error("Failed to fetch icons:", err);
        setError("Failed to load icons");
      } finally {
        setLoading(false);
      }
    };

    loadIcons();
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data || loading) return [];

    const icons = Object.values(data.simpleIcons)
      .map((icon) => renderCustomIcon(icon, theme || "light"))
      .filter(Boolean); // Remove null values from failed renders

    return icons;
  }, [data, theme, loading]);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-[500px]">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error || renderedIcons.length === 0) {
    return (
      <div className="flex justify-center items-center w-full h-[500px]">
        <p className="text-gray-500">Unable to load skill icons</p>
      </div>
    );
  }

  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
}