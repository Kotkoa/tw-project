import { Inter } from 'next/font/google';
import { Converter } from '@/components/Converter';
import { Tab } from '@headlessui/react';
import { SimpleForm } from '@/components/SimpleForm';
import classNames from 'classnames';

const inter = Inter({ subsets: ['latin'] });

const tabList = ['Conveter', 'Simple form', 'Tab 3'];

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}>
      <div className="w-full max-w-md px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {tabList.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white text-blue-700 shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel>
              <Converter />
            </Tab.Panel>
            <Tab.Panel>
              <SimpleForm />
            </Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </main>
  );
}
