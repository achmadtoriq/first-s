import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Textarea,
  Transition,
} from "@headlessui/react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const DialogBox = ({ isOpen, choice, Price, setIsOpen }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <Dialog
            static
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50 text-black"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 overflow-y-auto bg-black/30 p-10"
            />
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-full p-4 text-left">
                <DialogPanel
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="max-w-lg space-y-4 bg-white p-6 rounded-lg"
                >
                  <DialogTitle className="text-lg font-bold text-center">
                    Lengkapi Data
                  </DialogTitle>
                  <Description
                    className={`text-sm/6 text-center font-medium text-red-500`}
                  >
                    Kami akan segera menghubungi anda sesuai data yang di
                    inputkan
                  </Description>
                  <div className="grid grid-cols-1">
                    <Fieldset className="rounded-xl bg-white/5">
                      {Price.map((item, idx) => {
                        return item.id == choice.split("-")[0] ? (
                          <div key={idx}>
                            <Legend
                              className={`text-xl font-bold text-center ${item.class[1]}`}
                            >
                              {item.name}
                            </Legend>
                            <Legend
                              className={`text-xl font-bold text-center ${item.class[1]}`}
                            >
                              Rp.{" "}
                              {item.price[choice.split("-")[1]].replace(
                                ",",
                                "."
                              )}
                            </Legend>
                          </div>
                        ) : (
                          ""
                        );
                      })}

                      <div className="rounded-xl border-black/10 border-2 px-3 my-3">
                        <Field className={`pt-3`}>
                          <Label className="text-sm/6 font-medium text-black">
                            Nama Lengkap
                          </Label>
                          <Input
                            className={clsx(
                              "mt-3 block w-full rounded-lg border-none bg-black/10 py-1.5 px-3 text-sm/6 text-black",
                              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
                            )}
                          />
                        </Field>
                        <Field className={`pt-3`}>
                          <Label className="text-sm/6 font-medium text-black">
                            Email
                          </Label>
                          <Input
                            className={clsx(
                              "mt-3 block w-full rounded-lg border-none bg-black/10 py-1.5 px-3 text-sm/6 text-black",
                              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
                            )}
                          />
                        </Field>
                        <Field className={`pt-3`}>
                          <Label className="text-sm/6 font-medium text-black">
                            No. Handphone (WA)
                          </Label>
                          <Input
                            className={clsx(
                              "mt-3 block w-full rounded-lg border-none bg-black/10 py-1.5 px-3 text-sm/6 text-black",
                              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
                            )}
                          />
                        </Field>
                        <Field className={`pt-3`}>
                          <Label className="text-sm/6 font-medium text-black">
                            Alamat Lengkap
                          </Label>
                          <Description className="text-xs/6 text-black/50">
                            Masukkan alamat lengkap anda untuk memastikan lokasi
                            tercover provider kami
                          </Description>
                          <Textarea
                            className={clsx(
                              "mt-3 block w-full resize-none rounded-lg border-none bg-black/10 py-1.5 px-3 text-sm/6 text-black",
                              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
                            )}
                            rows={3}
                          />
                        </Field>

                        <div className="flex gap-4 my-5">
                          <button
                            onClick={() => setIsOpen(false)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold"
                          >
                            Kirim
                          </button>
                        </div>
                      </div>
                    </Fieldset>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default DialogBox;
