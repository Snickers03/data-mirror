import { useEffect, useState } from "react";

import InformationCard from "./InformationCard";

interface IpInfo {
  ip: string;
  city: string;
  region: string;
  country: string;
  loc: string;
  org: string;
  postal: string;
  timezone: string;
}

const IpAndLocation = () => {
  const [ipInfo, setIpInfo] = useState<IpInfo | null>(null);

  useEffect(() => {
    const fetchIpInfo = async () => {
      const response = await fetch("https://ipinfo.io/json");
      const data = await response.json();
      setIpInfo(data);
    };
    if (!ipInfo) {
      fetchIpInfo();
    }
  }, [ipInfo]);

  const location =
    ipInfo?.city + ", " + ipInfo?.region + ", " + ipInfo?.country;

  return (
    <div>
      <h2 className='pb-4 text-3xl font-medium'>IP & Location</h2>
      <div className='space-y-3'>
        <InformationCard label={ipInfo?.ip} path='/basic/ip-address.png' />
        <InformationCard label={location} path='/basic/map.png' />
        <InformationCard label={ipInfo?.org} path='/basic/wifi.png' />
      </div>
    </div>
  );
};

export default IpAndLocation;
