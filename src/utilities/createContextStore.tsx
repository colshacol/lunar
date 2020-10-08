import * as React from "react";

type ProviderPropsT = {
  children: any;
  [key: string]: any;
};

type CreatorT = (props: ProviderPropsT) => any;

export const createContextStore = (useCreator: CreatorT) => {
  const Context = React.createContext(null);

  const Provider = (props: ProviderPropsT) => {
    const store = useCreator(props);
    const { children } = props;

    return <Context.Provider children={children} value={store} />;
  };

  const useStore = () => {
    return React.useContext(Context);
  };

  return [Provider, useStore, Context];
};
