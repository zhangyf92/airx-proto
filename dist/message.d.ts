import * as $protobuf from "protobufjs";

/** Properties of a Message. */
export interface IMessage {

    /** Message did */
    did?: string;

    /** Message timestamp */
    timestamp?: google.protobuf.ITimestamp;

    /** Message data */
    data?: IData;
}

/** Represents a Message. */
export class Message {

    /**
     * Constructs a new Message.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMessage);

    /** Message did. */
    public did: string;

    /** Message timestamp. */
    public timestamp?: (google.protobuf.ITimestamp|null);

    /** Message data. */
    public data?: (IData|null);

    /**
     * Creates a new Message instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Message instance
     */
    public static create(properties?: IMessage): Message;

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Message;

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Message;

    /**
     * Verifies a Message message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Message
     */
    public static fromObject(object: { [k: string]: any }): Message;

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @param message Message
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Message to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Data. */
export interface IData {

    /** Data gateway */
    gateway?: IGateway;

    /** Data attitude */
    attitude?: IAttitude;

    /** Data battery */
    battery?: IBattery;

    /** Data dronestatus */
    dronestatus?: IDronestatus;

    /** Data gnss */
    gnss?: IGNSS;

    /** Data signal */
    signal?: ISignal;

    /** Data velocity */
    velocity?: IVelocity;

    /** Data custom */
    custom?: ICustom[];
}

/** Represents a Data. */
export class Data {

    /**
     * Constructs a new Data.
     * @param [properties] Properties to set
     */
    constructor(properties?: IData);

    /** Data gateway. */
    public gateway?: (IGateway|null);

    /** Data attitude. */
    public attitude?: (IAttitude|null);

    /** Data battery. */
    public battery?: (IBattery|null);

    /** Data dronestatus. */
    public dronestatus?: (IDronestatus|null);

    /** Data gnss. */
    public gnss?: (IGNSS|null);

    /** Data signal. */
    public signal?: (ISignal|null);

    /** Data velocity. */
    public velocity?: (IVelocity|null);

    /** Data custom. */
    public custom: ICustom[];

    /**
     * Creates a new Data instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Data instance
     */
    public static create(properties?: IData): Data;

    /**
     * Encodes the specified Data message. Does not implicitly {@link Data.verify|verify} messages.
     * @param message Data message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Data message, length delimited. Does not implicitly {@link Data.verify|verify} messages.
     * @param message Data message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Data message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Data;

    /**
     * Decodes a Data message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Data;

    /**
     * Verifies a Data message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Data message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Data
     */
    public static fromObject(object: { [k: string]: any }): Data;

    /**
     * Creates a plain object from a Data message. Also converts values to other types if specified.
     * @param message Data
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Data, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Data to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Custom. */
export interface ICustom {

    /** Custom key */
    key?: string;

    /** Custom val */
    val?: google.protobuf.IAny;
}

/** Represents a Custom. */
export class Custom {

    /**
     * Constructs a new Custom.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICustom);

    /** Custom key. */
    public key: string;

    /** Custom val. */
    public val?: (google.protobuf.IAny|null);

    /**
     * Creates a new Custom instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Custom instance
     */
    public static create(properties?: ICustom): Custom;

    /**
     * Encodes the specified Custom message. Does not implicitly {@link Custom.verify|verify} messages.
     * @param message Custom message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICustom, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Custom message, length delimited. Does not implicitly {@link Custom.verify|verify} messages.
     * @param message Custom message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICustom, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Custom message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Custom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Custom;

    /**
     * Decodes a Custom message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Custom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Custom;

    /**
     * Verifies a Custom message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Custom message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Custom
     */
    public static fromObject(object: { [k: string]: any }): Custom;

    /**
     * Creates a plain object from a Custom message. Also converts values to other types if specified.
     * @param message Custom
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Custom, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Custom to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long);

            /** Timestamp nanos */
            nanos?: number;
        }

        /** Represents a Timestamp. */
        class Timestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: string;

            /** Any value */
            value?: Uint8Array;
        }

        /** Represents an Any. */
        class Any {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Properties of a Gateway. */
export interface IGateway {

    /** Gateway name */
    name?: string;
}

/** Represents a Gateway. */
export class Gateway {

    /**
     * Constructs a new Gateway.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGateway);

    /** Gateway name. */
    public name: string;

    /**
     * Creates a new Gateway instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Gateway instance
     */
    public static create(properties?: IGateway): Gateway;

    /**
     * Encodes the specified Gateway message. Does not implicitly {@link Gateway.verify|verify} messages.
     * @param message Gateway message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGateway, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Gateway message, length delimited. Does not implicitly {@link Gateway.verify|verify} messages.
     * @param message Gateway message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGateway, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Gateway message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Gateway
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Gateway;

    /**
     * Decodes a Gateway message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Gateway
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Gateway;

    /**
     * Verifies a Gateway message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Gateway message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Gateway
     */
    public static fromObject(object: { [k: string]: any }): Gateway;

    /**
     * Creates a plain object from a Gateway message. Also converts values to other types if specified.
     * @param message Gateway
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Gateway, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Gateway to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Attitude. */
export interface IAttitude {

    /** Attitude pitch */
    pitch?: number;

    /** Attitude roll */
    roll?: number;

    /** Attitude yaw */
    yaw?: number;
}

/** Represents an Attitude. */
export class Attitude {

    /**
     * Constructs a new Attitude.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAttitude);

    /** Attitude pitch. */
    public pitch: number;

    /** Attitude roll. */
    public roll: number;

    /** Attitude yaw. */
    public yaw: number;

    /**
     * Creates a new Attitude instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Attitude instance
     */
    public static create(properties?: IAttitude): Attitude;

    /**
     * Encodes the specified Attitude message. Does not implicitly {@link Attitude.verify|verify} messages.
     * @param message Attitude message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAttitude, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Attitude message, length delimited. Does not implicitly {@link Attitude.verify|verify} messages.
     * @param message Attitude message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAttitude, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Attitude message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Attitude
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Attitude;

    /**
     * Decodes an Attitude message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Attitude
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Attitude;

    /**
     * Verifies an Attitude message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Attitude message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Attitude
     */
    public static fromObject(object: { [k: string]: any }): Attitude;

    /**
     * Creates a plain object from an Attitude message. Also converts values to other types if specified.
     * @param message Attitude
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Attitude, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Attitude to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Battery. */
export interface IBattery {

    /** Battery percent */
    percent?: number;

    /** Battery charging */
    charging?: boolean;

    /** Battery voltage */
    voltage?: number;

    /** Battery current */
    current?: number;
}

/** Represents a Battery. */
export class Battery {

    /**
     * Constructs a new Battery.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBattery);

    /** Battery percent. */
    public percent: number;

    /** Battery charging. */
    public charging: boolean;

    /** Battery voltage. */
    public voltage: number;

    /** Battery current. */
    public current: number;

    /**
     * Creates a new Battery instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Battery instance
     */
    public static create(properties?: IBattery): Battery;

    /**
     * Encodes the specified Battery message. Does not implicitly {@link Battery.verify|verify} messages.
     * @param message Battery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBattery, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Battery message, length delimited. Does not implicitly {@link Battery.verify|verify} messages.
     * @param message Battery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBattery, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Battery message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Battery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Battery;

    /**
     * Decodes a Battery message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Battery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Battery;

    /**
     * Verifies a Battery message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Battery message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Battery
     */
    public static fromObject(object: { [k: string]: any }): Battery;

    /**
     * Creates a plain object from a Battery message. Also converts values to other types if specified.
     * @param message Battery
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Battery, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Battery to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Dronestatus. */
export interface IDronestatus {

    /** Dronestatus motors */
    motors?: boolean;

    /** Dronestatus flying */
    flying?: boolean;
}

/** Represents a Dronestatus. */
export class Dronestatus {

    /**
     * Constructs a new Dronestatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDronestatus);

    /** Dronestatus motors. */
    public motors: boolean;

    /** Dronestatus flying. */
    public flying: boolean;

    /**
     * Creates a new Dronestatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Dronestatus instance
     */
    public static create(properties?: IDronestatus): Dronestatus;

    /**
     * Encodes the specified Dronestatus message. Does not implicitly {@link Dronestatus.verify|verify} messages.
     * @param message Dronestatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDronestatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Dronestatus message, length delimited. Does not implicitly {@link Dronestatus.verify|verify} messages.
     * @param message Dronestatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDronestatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Dronestatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Dronestatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Dronestatus;

    /**
     * Decodes a Dronestatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Dronestatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Dronestatus;

    /**
     * Verifies a Dronestatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Dronestatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Dronestatus
     */
    public static fromObject(object: { [k: string]: any }): Dronestatus;

    /**
     * Creates a plain object from a Dronestatus message. Also converts values to other types if specified.
     * @param message Dronestatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Dronestatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Dronestatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GNSS. */
export interface IGNSS {

    /** GNSS satellite */
    satellite?: number;

    /** GNSS latitude */
    latitude?: number;

    /** GNSS longitude */
    longitude?: number;

    /** GNSS amsl */
    amsl?: number;

    /** GNSS ato */
    ato?: number;

    /** GNSS timestamp */
    timestamp?: google.protobuf.ITimestamp;
}

/** Represents a GNSS. */
export class GNSS {

    /**
     * Constructs a new GNSS.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGNSS);

    /** GNSS satellite. */
    public satellite: number;

    /** GNSS latitude. */
    public latitude: number;

    /** GNSS longitude. */
    public longitude: number;

    /** GNSS amsl. */
    public amsl: number;

    /** GNSS ato. */
    public ato: number;

    /** GNSS timestamp. */
    public timestamp?: (google.protobuf.ITimestamp|null);

    /**
     * Creates a new GNSS instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GNSS instance
     */
    public static create(properties?: IGNSS): GNSS;

    /**
     * Encodes the specified GNSS message. Does not implicitly {@link GNSS.verify|verify} messages.
     * @param message GNSS message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGNSS, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GNSS message, length delimited. Does not implicitly {@link GNSS.verify|verify} messages.
     * @param message GNSS message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGNSS, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GNSS message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GNSS
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GNSS;

    /**
     * Decodes a GNSS message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GNSS
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GNSS;

    /**
     * Verifies a GNSS message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GNSS message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GNSS
     */
    public static fromObject(object: { [k: string]: any }): GNSS;

    /**
     * Creates a plain object from a GNSS message. Also converts values to other types if specified.
     * @param message GNSS
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GNSS, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GNSS to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Signal. */
export interface ISignal {

    /** Signal percent */
    percent?: number;

    /** Signal type */
    type?: Signal.Type;

    /** Signal protocal */
    protocal?: string;

    /** Signal rssi */
    rssi?: number;
}

/** Represents a Signal. */
export class Signal {

    /**
     * Constructs a new Signal.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISignal);

    /** Signal percent. */
    public percent: number;

    /** Signal type. */
    public type: Signal.Type;

    /** Signal protocal. */
    public protocal: string;

    /** Signal rssi. */
    public rssi: number;

    /**
     * Creates a new Signal instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Signal instance
     */
    public static create(properties?: ISignal): Signal;

    /**
     * Encodes the specified Signal message. Does not implicitly {@link Signal.verify|verify} messages.
     * @param message Signal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISignal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Signal message, length delimited. Does not implicitly {@link Signal.verify|verify} messages.
     * @param message Signal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISignal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Signal message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Signal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Signal;

    /**
     * Decodes a Signal message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Signal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Signal;

    /**
     * Verifies a Signal message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Signal message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Signal
     */
    public static fromObject(object: { [k: string]: any }): Signal;

    /**
     * Creates a plain object from a Signal message. Also converts values to other types if specified.
     * @param message Signal
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Signal, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Signal to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Signal {

    /** Type enum. */
    enum Type {
        UNDEFINED = 0,
        OTHER = 1,
        TELE2G = 2,
        TELE3G = 3,
        TELE4G = 4,
        TELE5G = 5,
        WIFI24GHZ = 6,
        WIFI58GHZ = 7
    }
}

/** Properties of a Velocity. */
export interface IVelocity {

    /** Velocity x */
    x?: number;

    /** Velocity y */
    y?: number;

    /** Velocity z */
    z?: number;
}

/** Represents a Velocity. */
export class Velocity {

    /**
     * Constructs a new Velocity.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVelocity);

    /** Velocity x. */
    public x: number;

    /** Velocity y. */
    public y: number;

    /** Velocity z. */
    public z: number;

    /**
     * Creates a new Velocity instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Velocity instance
     */
    public static create(properties?: IVelocity): Velocity;

    /**
     * Encodes the specified Velocity message. Does not implicitly {@link Velocity.verify|verify} messages.
     * @param message Velocity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVelocity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Velocity message, length delimited. Does not implicitly {@link Velocity.verify|verify} messages.
     * @param message Velocity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVelocity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Velocity message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Velocity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Velocity;

    /**
     * Decodes a Velocity message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Velocity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Velocity;

    /**
     * Verifies a Velocity message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Velocity message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Velocity
     */
    public static fromObject(object: { [k: string]: any }): Velocity;

    /**
     * Creates a plain object from a Velocity message. Also converts values to other types if specified.
     * @param message Velocity
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Velocity, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Velocity to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}