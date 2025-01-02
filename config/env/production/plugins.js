module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: "strapi-provider-cloudflare-r2",
            providerOptions: {
                accessKeyId: env("CF_ACCESS_KEY_ID"),
                secretAccessKey: env("CF_ACCESS_SECRET"),
                /**
                 * `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`
                 */
                endpoint: env("CF_ENDPOINT"),
                params: {
                    Bucket: `${env("CF_BUCKET")}/uploads`,
                },
                /**
                   * Set this Option to store the CDN URL of your files and not the R2 endpoint URL in your DB.
                   * Can be used in Cloudflare R2 with Domain-Access or Public URL: https://pub-<YOUR_PULIC_BUCKET_ID>.r2.dev
                   * This option is required to upload files larger than 5MB, and is highly recommended to be set.
                   * Check the cloudflare docs for the setup: https://developers.cloudflare.com/r2/data-access/public-buckets/#enable-public-access-for-your-bucket
                   */
                cloudflarePublicAccessUrl: env("CF_PUBLIC_ACCESS_URL"),
                /**
                 * Sets if all assets should be uploaded in the root dir regardless the strapi folder.
                 * It is useful because strapi sets folder names with numbers, not by user's input folder name
                 * By default it is false
                 */
                pool: false
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },

    tinymce: {
        enabled: true,
        config: {
            editor: {
                outputFormat: "html",
                tinymceSrc: "/js/tinymce/tinymce.min.js", // USE WITH YOUR PUBLIC PATH TO TINYMCE LIBRARY FOR USING SELF HOSTED TINYMCE
                editorConfig: {
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    language: "pl",
                    height: 500,
                    plugins:
                        "advlist image code emoticons link lists table",
                    toolbar:
                        "undo redo | blocks | bold image code italic | bullist numlist | link emoticons",
                },
            },
        },
    }    
});