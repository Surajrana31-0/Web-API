/*
Legacy Code Copy (Archived)
This block preserves the old helper code for easy comparison.

// export class ApiResponseHelper {
//     static success<T>(
//         res:Response,
//         data: T,
//         message: String = "Success",
//         status:number = 200,
//         meta?:paginationMeta
//     ){
//         const response:ApiResponse<T> {
//             status,
//             data,
//             message,
//             meta
//         }
//         return res.status(status).json(response);
//     }
// }
// static error(
//     res:Response,
//     message: string = "Error",
//     status: number = 500
// ){
//     const response:Omit<ApiResponse<any>,'data'> = {
//         status,
//         message
//     }
//     return res.status(status).json(data);
// }
*/

import { Response } from "express";

export interface PaginationMeta {
    page: number;
    limit: number;
    total: number;
}

export interface ApiResponse<T> {
    status: number;
    data: T;
    message: string;
    meta?: PaginationMeta;
}

export class ApiResponseHelper {
    static success<T>(
        res: Response,
        data: T,
        status: number = 200,
        message: string = "Success",
        meta?: PaginationMeta
    ) {
        const response: ApiResponse<T> = {
            status,
            data,
            message,
            meta,
        };

        return res.status(status).json(response);
    }

    static error(
        res: Response,
        message: string = "Error",
        status: number = 500
    ) {
        return res.status(status).json({
            status,
            message,
        });
    }
}