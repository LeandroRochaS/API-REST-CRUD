class HomerController {
  index(res, req) {
    req.json({
      tudoCerto: true,
    });

  }
}

export default new HomerController();
