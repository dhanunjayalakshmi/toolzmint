const isFiniteNumber = (value) => Number.isFinite(value);

export const parseUnixTimestampInput = (value) => {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return {
      error: "",
      milliseconds: null,
      seconds: null,
    };
  }

  const numericValue = Number(trimmedValue);

  if (!isFiniteNumber(numericValue)) {
    return {
      error: "Invalid timestamp",
      milliseconds: null,
      seconds: null,
    };
  }

  const isMilliseconds = Math.abs(numericValue) >= 1e12;
  const milliseconds = isMilliseconds
    ? Math.trunc(numericValue)
    : Math.trunc(numericValue * 1000);
  const seconds = Math.trunc(milliseconds / 1000);

  if (!isFiniteNumber(milliseconds) || !isFiniteNumber(seconds)) {
    return {
      error: "Invalid timestamp",
      milliseconds: null,
      seconds: null,
    };
  }

  return {
    error: "",
    milliseconds,
    seconds,
  };
};

export const formatTimestampDetails = (milliseconds) => {
  if (!isFiniteNumber(milliseconds)) {
    return null;
  }

  const date = new Date(milliseconds);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return {
    local: date.toLocaleString(),
    utc: date.toUTCString(),
    iso: date.toISOString(),
  };
};

export const convertDateTimeLocalToTimestamps = (value) => {
  if (!value) {
    return {
      error: "",
      milliseconds: null,
      seconds: null,
    };
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return {
      error: "Invalid date",
      milliseconds: null,
      seconds: null,
    };
  }

  const milliseconds = date.getTime();

  return {
    error: "",
    milliseconds,
    seconds: Math.floor(milliseconds / 1000),
  };
};

export const getCurrentDateTimeLocalValue = () => {
  const date = new Date();
  const timezoneOffset = date.getTimezoneOffset() * 60000;

  return new Date(date.getTime() - timezoneOffset).toISOString().slice(0, 16);
};
