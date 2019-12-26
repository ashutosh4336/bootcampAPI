// @desc        Get all BootCamps
// @route       GET /api/v1/bootcamps
// @access      Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all Bootcamp' });
};

// @desc        Get a single BootCamps
// @route       GET /api/v1/bootcamps/:id
// @access      Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Display a bootcamp ${req.params.id}`
  });
};

// @desc        Craete a new BootCamp
// @route       POST /api/v1/bootcamps
// @access      Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create Bootcamp' });
};

// @desc        Update a BootCamps
// @route       PUT /api/v1/bootcamps/:id
// @access      Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update a bootcamp ${req.params.id}` });
};

// @desc        Delete a BootCamps
// @route       Delete /api/v1/bootcamps/:id
// @access      Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete a bootcamp ${req.params.id}` });
};
