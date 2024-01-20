import { headers } from "next/headers";
import Image from "next/image";
import { Fragment } from "react";
import Error from "@/components/Error";
import InfoBand from "@/components/InfoBand";
import CopyInfo from "@/components/InfoBand/CopyInfo";
import IPAddressSearch from "@/components/IPAddressSearch";
import { LayoutContainer, FlexBox } from "@/components/Layouts";
import PageNav from "@/components/PageNav";
import RealtimeClock from "@/components/RealtimeClock";
import P from "@/components/Typography/P";
import { apiBaseUrl } from "@/globals/constants";

export default async function Home({ searchParams }: { searchParams?: { ip: string } }) {
  const forwardedFor = headers().get("x-forwarded-for");
  const clientIP = process.env.NODE_ENV === "development" ? "1.1.1.1" : forwardedFor;
  const ipQuery = searchParams?.ip;

  const res = await fetch(`${apiBaseUrl}${ipQuery || clientIP}`, {
    cache: "no-store"
  });

  const result = await res.json();
  const {
    success,
    message,
    ip,
    city,
    country,
    region,
    postal,
    timezone,
    flag,
    connection,
    type,
    latitude,
    longitude
  } = result;

  return (
    <Fragment>
      <LayoutContainer className='py-16'>
        <FlexBox className='mb-1624 items-center justify-between gap-16' wrap='max-sm'>
          <PageNav isQueryPage={!!ipQuery} />
          <IPAddressSearch />
        </FlexBox>

        {success ? (
          <Fragment>
            <div className='py-2432'>
              <InfoBand title='IP Address' copy={<CopyInfo text={ip} />} />
              <InfoBand title='Connection Type' copy={type} />
              <InfoBand title='ISP' copy={connection?.isp} />
              <InfoBand
                title='Country'
                copy={
                  <FlexBox className='items-center gap-8'>
                    <P noMargin className='font-mono'>
                      {country}
                    </P>
                    {flag?.img ? (
                      <Image
                        src={flag.img}
                        alt='Location Icon'
                        className='p-4'
                        width={32}
                        height={20}
                      />
                    ) : null}
                  </FlexBox>
                }
              />

              <InfoBand title='City' copy={city} />
              <InfoBand title='Region' copy={region} />
              <InfoBand title='Postal Code' copy={<CopyInfo text={postal} />} />
              <InfoBand title='Timezone' copy={`${timezone?.id} (${timezone?.abbr})`} />
              <InfoBand title='Current Time' copy={<RealtimeClock timeZone={timezone?.id} />} />
            </div>

            <div className='mb-24 w-full'>
              <iframe
                className='aspect-video w-full'
                src={`https://maps.google.com/maps?width=600&height=400&hl=en&q=${latitude}+${longitude}&t=&z=15&ie=UTF8&iwloc=B&output=embed`}></iframe>
            </div>
          </Fragment>
        ) : (
          <Error errorMessage={message} />
        )}
      </LayoutContainer>
    </Fragment>
  );
}
