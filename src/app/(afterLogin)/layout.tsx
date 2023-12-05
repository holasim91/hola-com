import { ReactNode } from "react";

type Props = {children: ReactNode}

export default async function AfterLoginLayout ({children}:Props) {
    return (
      <div>
          로그인 후 레이아웃
        {children}
      </div>
    );
  }
  