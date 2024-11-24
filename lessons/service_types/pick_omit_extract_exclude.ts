namespace PickOmitExtractExclude {
  interface PaymentPersistent {
    id: number;
    sum: number;
    from: string;
    to: string;
  }

  // 1 - откуда, второе - что
  type Payment = Omit<PaymentPersistent, 'id'>
  type PaymentRequisits = Pick<PaymentPersistent, 'from' | 'to'>


  // вытаскивает из union типа только то, что нам необходимо
  type ExtractEx = Extract<'from' | 'to' | Payment, string>
  type ExcludeExample = Exclude<'from' | 'to' | Payment, string>
}