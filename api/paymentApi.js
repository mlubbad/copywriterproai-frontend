import fetcher from "./fetcher";

const content = {
  getPriceList: () => {
    return fetcher("/payments/product-prices");
  },
  postCreateCustomer: () => {
    return fetcher("/payments/create-customer", {
      method: "post",
    });
  },
  postCreateCheckoutSession: ({ data }) => {
    return fetcher("/payments/create-checkout-session", {
      method: "post",
      data,
    });
  },
  getCheckoutSession: ({ sessionId }) => {
    return fetcher(`/payments/checkout-session?sessionId=${sessionId}`);
  },
  postCreateSubscription: ({ data }) => {
    return fetcher("/payments/create-subscription", {
      method: "post",
      data,
    });
  },
  getInvoicePreview: () => {
    return fetcher("/payments/subscription-invoice");
  },
  postCancelSubscription: ({ data }) => {
    return fetcher("/payments/cancel-subscription", {
      method: "post",
      data,
    });
  },
  postUpdateSubscription: ({ data }) => {
    return fetcher("/payments/update-subscription", {
      method: "post",
      data,
    });
  },
};

export default content;
