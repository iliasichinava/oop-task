interface Image { }

class ImagePng implements Image { }
class ImageGif implements Image { }
class ImageJpeg implements Image { }

class InvalidFileExtensionError extends Error {
	constructor() {
		super("Invalid file extension");
	}
}

class UnknownImageTypeError extends Error {
	constructor() {
		super("Unknown image type");
	}
}

class ImageFactory {
	public static create(imagePath: string): Image | never {
		const extension = imagePath.split(".").pop();

		if (!extension) {
			throw new InvalidFileExtensionError();
		}

		const lowercaseExtension = extension.toLowerCase();

		switch (lowercaseExtension) {
			case "png":
				return new ImagePng();
			case "gif":
				return new ImageGif();
			case "jpg":
			case "jpeg":
				return new ImageJpeg();
			default:
				throw new UnknownImageTypeError();
		}
	}
}
