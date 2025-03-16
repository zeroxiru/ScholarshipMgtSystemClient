import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  Transition,
  DialogTitle,
  DialogPanel,
} from '@headlessui/react';

const BeAModerator = ({ closeModal, isOpen, requestHandler }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Become a Moderator!
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Please read all the terms & conditions before becoming a moderator.
                  </p>
                </div>
                <hr className="mt-8" />
                <div className="flex mt-4 justify-around">
                  <button
                    onClick={requestHandler}
                    className="px-4 py-2 bg-slate-500 text-white-300 text-sm font-medium rounded-md hover:bg-white-200 focus:outline-none focus:ring-2 focus:ring-slate-500"
                  >
                    Send Request
                  </button>
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-slate-500 text-white-300 text-sm font-medium rounded-md hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500"
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

BeAModerator.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  requestHandler: PropTypes.func.isRequired,
};

export default BeAModerator;
