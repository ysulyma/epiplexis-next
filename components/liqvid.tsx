import {Html as DreiHtml, useContextBridge} from "@react-three/drei";
import katex from "katex";
import dynamic from "next/dynamic";
import Head from "next/head";

// @todo make Liqvid support Next
export const Player = dynamic(
  () =>
    import("liqvid").then((Liqvid) => {
      return function Player(
        props: React.ComponentPropsWithoutRef<typeof Liqvid.Player>,
      ) {
        return (
          <Liqvid.Player
            controls={
              <>
                <Liqvid.Controls.PlayPause />
                <Liqvid.Controls.TimeDisplay />

                <div className="lv-controls-right">
                  <Liqvid.Controls.FullScreen />
                </div>
              </>
            }
            {...props}
          />
        );
      };
    }),
  {ssr: false},
);

export const KTX = dynamic(() => import("@liqvid/katex").then(({KTX}) => KTX), {
  ssr: false,
});

export const Canvas = dynamic(
  () => import("@liqvid/react-three").then(({Canvas}) => Canvas),
  {ssr: false},
);

export const Html = dynamic(
  () =>
    import("liqvid").then(
      ({Player, usePlayer}) =>
        function Html({
          children,
          ...props
        }: React.PropsWithChildren<React.ComponentProps<typeof DreiHtml>>) {
          return (
            <DreiHtml {...props}>
              <Player.Context.Provider value={usePlayer()}>
                {children}
              </Player.Context.Provider>
            </DreiHtml>
          );
        },
    ),
  {ssr: false},
);

export function LoadKaTeX() {
  if (typeof globalThis.window !== "undefined") {
    window.katex = katex;
  }

  return (
    <Head>
      <script async src="katex.js"></script>
    </Head>
  );
}
