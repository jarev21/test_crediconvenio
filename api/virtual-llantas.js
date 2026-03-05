export default function handler(req, res) {

  if (req.method === "POST") {

    const { orderId, amount, status } = req.body;

    return res.status(200).json({
      name: "VIRTUAL_LLANTAS",
      orderId,
      amount,
      status
    });

  }

  res.status(200).json({
    message: "Mock API Virtual Llantas funcionando"
  });

}
