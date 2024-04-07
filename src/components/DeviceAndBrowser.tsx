import { useEffect, useState } from "react";
import { getBatteryStatus, getBrowser } from "@/utils/utils";

import InformationCard from "./InformationCard";

export interface BatteryType {
  level: number;
  charging: boolean;
}

interface DeviceType {
  platform: string;
  userAgent: string;
  appVersion: string;
  vendor: string;
  language: string;
  resolution: string;
}

const DeviceAndBrowser = () => {
  const [battery, setBattery] = useState<BatteryType | null>(null);
  const [device, setDevice] = useState<DeviceType | null>(null);

  useEffect(() => {
    const getBattery = async () => {
      // @ts-ignore
      const battery = await navigator.getBattery();
      setBattery(battery);
    };
    getBattery();

    const getDevice = () => {
      const device = {
        platform: navigator.platform,
        userAgent: navigator.userAgent,
        appVersion: navigator.appVersion,
        vendor: navigator.vendor,
        language: navigator.language,
        resolution: `${window.screen.width} x ${window.screen.height}`,
      };
      setDevice(device);
    };
    getDevice();
  }, []);

  return (
    <div>
      <h2 className='pb-4 text-3xl font-medium'>Device & Browser</h2>
      <div className='space-y-3'>
        <div className='grid grid-cols-2'>
          <InformationCard
            label={device?.platform}
            path='/device/platform.png'
            alt='platform'
          />
          <InformationCard
            label={getBrowser(device?.userAgent)}
            path='/device/browser.png'
            alt='browser'
          />
        </div>
        <InformationCard
          label={device?.resolution}
          path='/device/frame.png'
          alt='frame'
        />
        <InformationCard
          label={getBatteryStatus(battery)}
          path='/device/battery-status.png'
          alt='frame'
          isCharging={battery?.charging}
        />
      </div>
    </div>
  );
};

export default DeviceAndBrowser;
