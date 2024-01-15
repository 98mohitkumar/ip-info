import Image from "next/image";
import { Fragment } from "react";
import Error from "@/components/Error";
import InfoBand from "@/components/InfoBand";
import CopyInfo from "@/components/InfoBand/CopyInfo";
import IPAddressSearch from "@/components/IPAddressSearch";
import { LayoutContainer, FlexBox } from "@/components/Layouts";
import PageNav from "@/components/PageNav";
import P from "@/components/Typography/P";
import { apiBaseUrl, siteConfig } from "@/globals/constants";

export async function generateMetadata() {
  return { ...siteConfig, openGraph: siteConfig };
}

export default async function Home({ searchParams }: { searchParams?: { ip: string } }) {
  const ipQuery = searchParams?.ip || "";

  const res = await fetch(ipQuery ? `${apiBaseUrl}${ipQuery}` : apiBaseUrl, {
    cache: "no-store",
  });

  const result = await res.json();
  const {
    success,
    message,
    ip,
    city,
    country,
    timezone,
    flag,
    connection,
    type,
    postal,
    capital,
    latitude,
    longitude,
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
                title='Location'
                copy={
                  <FlexBox className='items-center gap-8'>
                    <P noMargin className='font-mono'>
                      {city + ", " + country}
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

              <InfoBand title='Capital' copy={capital} />
              <InfoBand title='Postal Code' copy={<CopyInfo text={postal} />} />
              <InfoBand title='Timezone' copy={`${timezone?.id} (${timezone?.abbr})`} />
              <InfoBand
                title='Current Time'
                copy={new Date(timezone?.current_time).toLocaleTimeString("en-US", {
                  timeZone: timezone?.id,
                })}
              />
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
