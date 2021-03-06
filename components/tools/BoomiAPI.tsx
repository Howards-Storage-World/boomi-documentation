import React, { FC, useContext, useState } from "react";

export class BoomiAPI {
  private _protocol: string;
  private _host: string;
  private _port: string;
  private _basePath: string;

  constructor(protocol: string, host: string, port: string | number, basePath = "") {
    this._protocol = protocol;
    this._host = host;
    this._port = port.toString();
    this._basePath = basePath;
  }

  public get uri(): string {
    return `${this._protocol}://${this._host}:${this._port}${this._basePath}`;
  }
}

export interface BoomiAPIContext {
  endpoint: BoomiAPI;
  setEndpoint: (endpoint: BoomiAPI) => void
  setTest: () => void
  setProduction: () => void
  set(isTest: boolean): void
}

export const useBoomiAPI = (): BoomiAPIContext => {
  return useContext(context);
};

// eslint-disable-next-line max-lines-per-function
const useProvideBoomiAPI: () => BoomiAPIContext = () => {
  const [endpoint, setEndpoint] = useState(new BoomiAPI("https", "boomi.hsw.com.au", "443"));

  const setTest = () => {
    setEndpoint(new BoomiAPI("https", "test-boomi.hsw.com.au", "443"))
  }

  const setProduction = () => {
    setEndpoint(new BoomiAPI("https", "boomi.hsw.com.au", "443"))
  }

  const set = (isTest: boolean) => {
    isTest ? setTest() : setProduction()
  }

  return {
    endpoint,
    setEndpoint,
    setTest,
    setProduction,
    set
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const context: React.Context<BoomiAPIContext> = React.createContext<any>({});

export const BoomiAPIProvider: FC = ({ children }) => {
  const boomiAPI = useProvideBoomiAPI();
  return (
    <context.Provider value={boomiAPI}>
      {children}
    </context.Provider>
  );
};

export const SelectBoomiEnvironment: FC = () => {
  const boomiAPI = useBoomiAPI();
  const [isTestEnvironment, setIsTestEnvironment] = useState(false);
  return (
    <label>
      Use Test Environment
      <input type="checkbox" checked={isTestEnvironment} onChange={(e) => { setIsTestEnvironment(e.target.checked); boomiAPI.set(e.target.checked); }}/>
    </label>
  )
}